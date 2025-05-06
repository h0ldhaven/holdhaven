import React from 'react';
import { ThemeProvider } from './ThemeProvider';

interface MainProviderProps {
    children: React.ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};