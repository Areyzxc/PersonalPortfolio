'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { ThemeToggle } from '../theme';
import { LanguageSelector } from './LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Enable smooth scrolling behavior
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check both window and document element to be safe across browsers
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      setShowBackToTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle anchor navigation with navbar offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate navbar height and add extra padding
      const navbarHeight = 64; // h-16 = 64px
      const scrollOffset = 20; // Extra padding for visual comfort
      const elementPosition = targetElement.offsetTop - navbarHeight - scrollOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    
    // Close mobile menu after navigation
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar with sticky positioning - sticks only when scrolling past top */}
      <nav className="sticky top-0 left-0 right-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-secondary/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r text-white from-accent to-accent-light bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop} // Clicking logo also goes to top
            >
              Areyszxc../Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}

              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-accent p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
        </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-xl border-t border-secondary/50"
              >
                <div className="px-4 py-4 space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-4 py-3 text-gray-300 hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-secondary/30">
                     <LanguageSelector isMobile={true} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </nav>

      {/* FIX 2: Floating Back-to-Top Button 
        Moved OUTSIDE the nav bar so it floats at the bottom right.
        This is standard UX.
      */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-white shadow-lg shadow-accent/40 border border-accent/50 backdrop-blur-sm hover:bg-accent-light transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
