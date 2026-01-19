'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { HeroSection, AboutSection } from '@/src/components/sections';

// Lazy load sections that are below the fold
const SkillsSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const ProjectsSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const GallerySection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.GallerySection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const ResumeSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.ResumeSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const CertificatesSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.CertificatesSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const HobbiesSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.HobbiesSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const GamesSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.GamesSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

const ContactSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <AboutSection />

      {/* Projects Section - FULL FEATURED */}
      <ProjectsSection />

      <SkillsSection />

      <GallerySection />

      <ResumeSection />

      <CertificatesSection />

      <HobbiesSection />

      <GamesSection />

      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-secondary text-center text-gray-500">
        <p>&copy; 2026 | James Aries G. Santiago. All rights reserved.</p>
      </footer>
    </div>
  );
}
