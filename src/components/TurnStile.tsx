import { useEffect, useRef, useState, useCallback } from 'react';

type TurnstileRenderOptions = {
    sitekey: string;
    callback: (token: string) => void;
    theme?: 'light' | 'dark' | 'auto';
    action?: string;
    'expired-callback'?: () => void;
};

type TurnstileAPI = {
    render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string;
    reset: (widgetId: string) => void;
    remove: (widgetId: string) => void;
};

declare global {
    interface Window {
        turnstile: TurnstileAPI;
    }
}

type Props = {
    onVerify: (token: string) => void;
    sitekey: string;
};

const TurnStile: React.FC<Props> = ({ onVerify, sitekey }) => {
    const widgetRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const scriptLoadedRef = useRef<boolean>(false);

    // États pour gérer le flow
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [challengeFailed, setChallengeFailed] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    const loadTurnstileScript = (): Promise<void> =>
        new Promise((resolve, reject) => {
            if (typeof window === 'undefined') {
                reject(new Error('window is undefined'));
                return;
            }

            if (window.turnstile) {
                scriptLoadedRef.current = true;
                setScriptLoaded(true);
                resolve();
                return;
            }

            const existingScript = document.querySelector<HTMLScriptElement>(
                'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
            );

            if (existingScript) {
                existingScript.addEventListener('load', () => {
                    scriptLoadedRef.current = true;
                    setScriptLoaded(true);
                    resolve();
                });
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            script.async = true;
            script.onload = () => {
                scriptLoadedRef.current = true;
                setScriptLoaded(true);
                resolve();
            };
            script.onerror = () => reject(new Error('Turnstile script failed to load'));
            document.body.appendChild(script);
        });

    const destroyWidget = () => {
        if (window.turnstile && widgetIdRef.current) {
            window.turnstile.remove(widgetIdRef.current);
            widgetIdRef.current = null;
        }
    };

    const resetWidget = () => {
        if (window.turnstile && widgetIdRef.current) {
            window.turnstile.reset(widgetIdRef.current);
        }
    };

    const renderWidget = useCallback(() => {
        if (!widgetRef.current || !window.turnstile) return;

        destroyWidget();

        const id = window.turnstile.render(widgetRef.current, {
            sitekey,
            callback: (token: string) => {
                if (!token) {
                    console.warn('Turnstile: token vide, challenge échoué');
                    setChallengeFailed(true);
                    onVerify('');            // on vide le token côté parent
                    // on relance le widget automatiquement après un court délai
                    setTimeout(() => {
                        resetWidget();
                        renderWidget();
                    }, 500);
                    return;
                }
                setChallengeFailed(false);
                onVerify(token);
            },
            'expired-callback': () => {
                console.warn('Turnstile: challenge expiré');
                setChallengeFailed(true);
                onVerify('');
                // pareil, reset + relance auto
                setTimeout(() => {
                    resetWidget();
                    renderWidget();
                }, 500);
            },
            theme: 'auto',
        });

        widgetIdRef.current = id;
    }, [sitekey, onVerify]);

    useEffect(() => {
        let isCancelled = false;

        const initTurnstile = async () => {
            try {
                await loadTurnstileScript();
                if (isCancelled) return;

                setIsLoading(false);

                if (widgetRef.current && window.turnstile && !widgetIdRef.current) {
                    const id = window.turnstile.render(widgetRef.current, {
                        sitekey,
                        callback: (token: string) => {
                            if (!token) {
                                console.warn('Turnstile: token vide, challenge échoué');
                                setChallengeFailed(true);
                                return;
                            }
                            onVerify(token);
                        },
                        'expired-callback': () => {
                            console.warn('Turnstile: challenge expiré');
                            setChallengeFailed(true);
                        },
                        theme: 'auto',
                    });

                    widgetIdRef.current = id;
                }
            } catch (err) {
                console.error('Erreur de chargement Turnstile:', err);
                setHasError(true);
                setIsLoading(false);
            }
        };

        initTurnstile();

        return () => {
            isCancelled = true;
            destroyWidget(); // ne touche pas le DOM si on est en teardown
        };
    }, [sitekey]);

    const handleRetry = () => {
        setChallengeFailed(false);
        onVerify('');
        setTimeout(() => {
            renderWidget();
        }, 100); // petite tempo pour éviter des glitchs DOM
    };

    if (hasError) {
        return <div>Erreur lors du chargement du captcha, merci de recharger la page.</div>;
    }

    return(
        <div>
            <div ref={widgetRef} className='mt-4' />

            {isLoading && <p>Chargement du captcha...</p>}

            {challengeFailed && !isLoading && (
                <div className='mt-4'>
                    <p className='text-red-500 mb-2'>Le challenge a échoué. Veux-tu réessayer ?</p>
                    <button
                        onClick={handleRetry}
                        className='px-4 py-2 bg-blue-600 text-white rounded'
                    >
                        Recharger le challenge
                    </button>
                </div>
            )}
        </div>
    );
};

export default TurnStile;