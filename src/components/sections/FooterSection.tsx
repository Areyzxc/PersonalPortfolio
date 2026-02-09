'use client';

import { motion } from 'framer-motion';
import { Mail, Heart, Code } from 'lucide-react';
import Link from 'next/link';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Areyzxc',
      label: 'GitHub',
      color: 'hover:text-white',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/james-aries-santiago',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {      
      icon: FaFacebookSquare,
      href: 'https://www.facebook.com/Areyszxc',
      label: 'Facebook',
      color: 'hover:text-blue-400',
    },
    {
        icon: FaInstagram,
        href: 'https://www.instagram.com/areys27_tiago.san/',
        label: 'Instagram',
        color: 'hover:text-pink-400',
    },
    {
      icon: Mail,
      href: 'mailto:jamesariess76@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  // Quick links
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  // Legal links
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ];

  const handleNavClick = (href: string) => {
    const targetElement = document.getElementById(href.replace('#', ''));
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-primary border-t border-secondary/50 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              James Aries G. Santiago
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Junior developer crafting digital experiences with modern technologies. Exploring the intersection of creativity and code to build impactful projects.
            </p>
            <motion.p className="text-xs px-3 py-1.5 rounded-full bg-accent/20 text-accent-light font-semibold inline-block">
              📍 Available for opportunities
            </motion.p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#resume" onClick={() => handleNavClick('#resume')} className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Resume / CV
                </a>
              </li>
              <li>
                <a href="#certificates" onClick={() => handleNavClick('#certificates')} className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Areyzxc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  GitHub Projects
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full bg-secondary/50 text-gray-400 transition-all ${social.color}`}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Let's collaborate on something great!
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Copyright & Credits */}
          <div className="text-gray-500 text-sm space-y-2">
            <p className="flex items-center justify-center gap-1">
              <Heart size={14} className="text-red-400" /> Built with Next.js, React, and Framer Motion
            </p>
            <p className="flex items-center justify-center gap-2">
              <Code size={14} className="text-accent" /> Styled with Tailwind CSS
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-4 text-xs">
            {legalLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600">•</span>
                )}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} James Aries G. Santiago. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
