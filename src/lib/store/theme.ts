import { create } from 'zustand';

interface ThemeStore {
  theme: 'light' | 'dark' | 'terminal';
  setTheme: (theme: 'light' | 'dark' | 'terminal') => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : state.theme === 'dark' ? 'terminal' : 'light',
    })),
}));
