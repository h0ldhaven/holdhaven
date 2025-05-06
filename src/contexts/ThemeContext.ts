import { createContext } from 'react';
import { Theme } from '../types/theme';


export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);