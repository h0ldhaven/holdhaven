import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Theme, ThemeEnum } from '../types/theme';
import { ThemeProviderProps } from '../interfaces/ThemeProviderProps';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === ThemeEnum.LIGHT || storedTheme === ThemeEnum.DARK) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);

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