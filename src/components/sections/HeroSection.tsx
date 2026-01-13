'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useScrollPosition } from '../../lib/hooks/useScrollPosition';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function HeroSection() {
  const scrollPosition = useScrollPosition();
  const opacity = Math.max(0, 1 - scrollPosition / 500);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse-slow"></div>
      <div className="absolute w-72 h-72 bg-accent-light/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse-slow animation-delay-2000"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center z-10 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Greeting */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-2 bg-secondary/50 border border-accent/50 rounded-full text-sm text-accent">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main title (Can change name here) */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hey, I'm{' '}
          <span className="text-accent animate-pulse">
            James Aries
          </span>
        </motion.h1>

        {/* Subtitle (Can change title here) */}
        <motion.p variants={item} className="text-xl md:text-2xl text-gray-400 mb-8">
          Full-Stack Developer • Creative Coder • Open Source Enthusiast • Design Planning
        </motion.p>

        {/* Description (Can change description here) */}
        <motion.p variants={item} className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I build beautiful, functional, and innovative web experiences. Let's create something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/50"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 rounded-lg font-semibold transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group transition-all hover:scale-125"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors"
          whileHover={{ color: 'rgba(59, 130, 246, 1)' }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
