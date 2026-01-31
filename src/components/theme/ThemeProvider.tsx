'use client';

import { useThemeStore } from '../../lib/store/theme';
import { useLocalStorage } from '../../lib/hooks/useLocalStorage';
import { useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();
  const [storedTheme, setStoredTheme] = useLocalStorage<'light' | 'dark' | 'terminal'>('theme', 'dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load theme from localStorage on mount
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'terminal' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove('light', 'dark', 'terminal-theme');
    
    // Add the new theme class
    if (theme === 'terminal') {
      root.classList.add('terminal-theme');
    } else {
      root.classList.add(theme);
    }

    // Save to localStorage
    setStoredTheme(theme);
  }, [theme, setStoredTheme, isMounted]);

  if (!isMounted) return <>{children}</>;

  return <>{children}</>;
}
