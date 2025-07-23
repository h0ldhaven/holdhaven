import { useEffect, useRef, useState, useCallback } from 'react';
import { TurnstileAPI } from '../types/TurnstileAPI';

declare global {
    interface Window {
        turnstile: TurnstileAPI;
    }
}

type Props = {
    onVerify: (token: string) => void;
    sitekey: string;
};

const Turnstile: React.FC<Props> = ({ sitekey, onVerify }) => {
    const widgetRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [expired, setExpired] = useState(false);

    const loadScript = useCallback(() => {
        return new Promise<void>((resolve, reject) => {
            if (window.turnstile) {
                resolve();
                return;
            }

            const existingScript = document.querySelector(
                'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]'
            );
            if (existingScript) {
                if (existingScript.hasAttribute('data-loaded')) {
                    resolve();
                } else {
                    existingScript.addEventListener('load', () => {
                        existingScript.setAttribute('data-loaded', 'true');
                        resolve();
                    });
                    existingScript.addEventListener('error', () => reject());
                }
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.onload = () => {
                script.setAttribute('data-loaded', 'true');
                resolve();
            };
            script.onerror = () => reject();
            document.body.appendChild(script);
        });
    }, []);

    const renderWidget = useCallback(() => {
        if (!widgetRef.current || !window.turnstile) return;

        // Remove existing widget if any
        if (widgetIdRef.current) {
            window.turnstile.remove(widgetIdRef.current);
            widgetIdRef.current = null;
        }

        const id = window.turnstile.render(widgetRef.current, {
            sitekey,
            theme: 'auto',
            callback: (token: string) => {
                setExpired(false);
                setError(false);
                if (token) {
                    onVerify(token);
                } else {
                    setError(true);
                    onVerify('');
                }
            },
            'expired-callback': () => {
                setExpired(true);
                onVerify('');
            },
            'error-callback': () => {
                setError(true);
            },
        });

        widgetIdRef.current = id;
    }, [onVerify, sitekey]);

    useEffect(() => {
        let isMounted = true;

        loadScript()
            .then(() => {
                if (isMounted) {
                    setLoading(false);
                    renderWidget();
                }
            })
            .catch(() => {
                if (isMounted) {
                    setLoading(false);
                    setError(true);
                }
            });

        return () => {
            isMounted = false;
            if (window.turnstile && widgetIdRef.current) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [loadScript, renderWidget]);

    const handleRetry = () => {
        setError(false);
        setExpired(false);
        onVerify('');
        if (window.turnstile && widgetIdRef.current) {
            window.turnstile.reset(widgetIdRef.current);
        } else {
            renderWidget();
        }
    };

    return (
        <>
            {loading && <p>Chargement du captcha...</p>}

            {error && (
                <div>
                    <p className='text-red-500'>Erreur lors du captcha. Veux-tu réessayer ?</p>
                    <button onClick={handleRetry}>Réessayer</button>
                </div>
            )}

            {expired && (
                <div>
                    <p className='text-yellow-600'>Le challenge a expiré. Veux-tu réessayer ?</p>
                    <button onClick={handleRetry}>Réessayer</button>
                </div>
            )}

            {/* Le container est toujours rendu */}
            <div ref={widgetRef} style={{ marginTop: '1rem' }} />
        </>
    );
};

export default Turnstile;