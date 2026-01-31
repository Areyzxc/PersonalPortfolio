'use client';

import { useThemeStore } from '../../lib/store/theme';
import { Moon, Sun, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const themeConfig = {
    light: {
      icon: Sun,
      color: 'text-yellow-400',
      label: 'Light Mode',
      gradient: 'from-yellow-400/20 to-yellow-500/10',
    },
    dark: {
      icon: Moon,
      color: 'text-blue-400',
      label: 'Dark Mode',
      gradient: 'from-blue-400/20 to-blue-500/10',
    },
    terminal: {
      icon: Terminal,
      color: 'text-green-400',
      label: 'Terminal Mode',
      gradient: 'from-green-400/20 to-green-500/10',
    },
  };

  // Show a placeholder until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="p-2 rounded-lg bg-secondary/50">
        <div className="w-5 h-5 bg-gray-600 rounded" />
      </div>
    );
  }

  // Ensure theme is a valid key, default to 'dark'
  const validThemes: ('light' | 'dark' | 'terminal')[] = ['light', 'dark', 'terminal'];
  const safeTheme = validThemes.includes(theme as any) ? (theme as 'light' | 'dark' | 'terminal') : 'dark';
  const current = themeConfig[safeTheme];
  const Icon = current.icon;

  const iconVariants = {
    enter: { y: -20, opacity: 0, rotate: -180 },
    center: { y: 0, opacity: 1, rotate: 0 },
    exit: { y: 20, opacity: 0, rotate: 180 },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={toggleTheme}
        className={`relative p-2 rounded-lg bg-gradient-to-br ${current.gradient} border border-white/10 hover:border-white/20 transition-all overflow-hidden group`}
        aria-label={`Toggle theme - currently ${current.label}`}
      >
        {/* Animated background glow */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity`}
          animate={{
            boxShadow: [
              `0 0 20px 0 rgba(59, 130, 246, 0.2)`,
              `0 0 40px 0 rgba(59, 130, 246, 0.4)`,
              `0 0 20px 0 rgba(59, 130, 246, 0.2)`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Icon container */}
        <div className="relative z-10 w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              variants={iconVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Icon className={`w-5 h-5 ${current.color}`} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ pointerEvents: 'none' }}
        />
      </motion.button>

      {/* Animated tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded-lg bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold whitespace-nowrap z-50 pointer-events-none"
          >
            {current.label}
            {/* Tooltip arrow */}
            <motion.div
              className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-white/20 to-white/10 border-l border-t border-white/20 rotate-45"
              style={{ margin: '0 0 -4px 0' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme indicator dots */}
      <motion.div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {(['light', 'dark', 'terminal'] as const).map((t) => (
          <motion.div
            key={t}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              theme === t
                ? current.color.replace('text-', 'bg-')
                : 'bg-gray-600'
            }`}
            animate={theme === t ? { scale: 1.3 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
