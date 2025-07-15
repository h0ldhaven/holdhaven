import { TurnstileRenderOptions } from './TurnstileRenderOptions';

export type TurnstileAPI = {
    render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string;
    reset: (widgetId: string) => void;
    remove: (widgetId: string) => void;
};