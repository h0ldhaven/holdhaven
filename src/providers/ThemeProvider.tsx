import React, { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeProviderProps } from '../interfaces/ThemeProviderProps';
import { Theme, ThemeEnum } from '../types/theme';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === ThemeEnum.LIGHT || storedTheme === ThemeEnum.DARK) {
            document.documentElement.classList.toggle('dark', storedTheme === ThemeEnum.DARK);
            return storedTheme as Theme;
        }
        return ThemeEnum.LIGHT;
    });

    const toggleTheme = () => {
        const newTheme: Theme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK: ThemeEnum.LIGHT;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};