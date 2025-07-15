import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconLinkProps {
    link: string;
    icon: IconDefinition;
    className?: string;
    name?: string;
    label?: string;
}