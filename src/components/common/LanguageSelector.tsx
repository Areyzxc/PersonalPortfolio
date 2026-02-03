'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

interface LanguageSelectorProps {
  isMobile?: boolean;
}

export function LanguageSelector({ isMobile = false }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hydration protection
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Click-outside handler to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    // Persist language preference to localStorage
    localStorage.setItem('preferredLanguage', languageCode);
    setIsOpen(false);
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  // Mobile dropdown style
  if (isMobile) {
    return (
      <div className="px-4 py-3 border-t border-secondary/50">
        <div className="text-xs text-gray-400 mb-2 font-semibold">Language</div>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                i18n.language === lang.code
                  ? 'bg-accent/30 text-accent border border-accent'
                  : 'bg-secondary/30 text-gray-300 hover:bg-secondary/50 border border-secondary/50'
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.label}
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop dropdown style
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 text-gray-300 hover:bg-secondary/50 hover:text-accent transition-colors text-sm font-medium border border-secondary/50"
        title="Change language"
      >
        <Globe size={16} />
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
      </motion.button>

      {/* Dropdown Menu with AnimatePresence for smooth animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-secondary border border-secondary/50 rounded-lg shadow-lg z-50 min-w-48"
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ x: 5 }}
                className={`w-full text-left px-4 py-3 transition-colors flex items-center gap-3 ${
                  index !== languages.length - 1 ? 'border-b border-secondary/50' : ''
                } ${
                  i18n.language === lang.code
                    ? 'bg-accent/20 text-accent'
                    : 'text-gray-300 hover:bg-secondary/50 hover:text-accent'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1">
                  <div className="font-medium">{lang.label}</div>
                  <div className="text-xs opacity-75">{lang.code}</div>
                </div>
                {i18n.language === lang.code && (
                  <span className="text-accent">✓</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
