'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: 'light' | 'dark';
};

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
    resolvedTheme: 'light',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'theme',
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

    // Atualiza o documento quando o tema muda
    const applyTheme = useCallback((theme: 'light' | 'dark') => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;
        setResolvedTheme(theme);
    }, []);

    // Usado para aplicar o tema do sistema ao início
    const applySystemTheme = useCallback(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        applyTheme(systemTheme);
    }, [applyTheme]);

    // Altera o tema e salva no localStorage
    const updateTheme = useCallback(
        (theme: Theme) => {
            setTheme(theme);
            localStorage.setItem(storageKey, theme);

            if (theme === 'system') {
                applySystemTheme();
            } else {
                applyTheme(theme);
            }
        },
        [storageKey, applyTheme, applySystemTheme]
    );

    useEffect(() => {
        // Tenta recuperar o tema do localStorage
        const savedTheme = localStorage.getItem(storageKey) as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }

        // Configura o tema inicial
        if (savedTheme === 'system' || !savedTheme) {
            applySystemTheme();
        } else {
            applyTheme(savedTheme);
        }

        // Ouvinte para mudanças no tema do sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            if (theme === 'system') {
                applySystemTheme();
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme, storageKey, applyTheme, applySystemTheme]);

    return (
        <ThemeProviderContext.Provider
            {...props}
            value={{
                theme,
                setTheme: updateTheme,
                resolvedTheme,
            }}
        >
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error('useTheme must be used within a ThemeProvider');

    return context;
};
