export type TurnstileRenderOptions = {
    sitekey: string;
    callback: (token: string) => void;
    theme?: 'light' | 'dark' | 'auto';
    'expired-callback'?: () => void;
    'error-callback'?: () => void;
};