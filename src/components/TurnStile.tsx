import { useEffect, useRef } from 'react';

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

    useEffect(() => {
        const loadTurnstileScript = (): Promise<void> => {
            return new Promise((resolve) => {
                if (window.turnstile) return resolve(); // déjà chargé
                const script = document.createElement('script');
                script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
                script.async = true;
                script.onload = () => resolve();
                document.body.appendChild(script);
            });
        };

        loadTurnstileScript().then(() => {
            if (window.turnstile && widgetRef.current && !widgetIdRef.current) {
                const id = window.turnstile.render(widgetRef.current, {
                    sitekey,
                    callback: onVerify,
                    'expired-callback': () => onVerify(''), // gestion d'expiration
                    theme: 'auto',
                });
                widgetIdRef.current = id;
            }
        });

        return () => {
            if (window.turnstile && widgetIdRef.current) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [onVerify, sitekey]);

    return <div ref={widgetRef} className='mt-4' />;
};

export default TurnStile;