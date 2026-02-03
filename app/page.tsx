'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { HeroSection, AboutSection, TechStackMarquee } from '@/src/components/sections';

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

const ContactSection = dynamic(() => import('@/src/components/sections').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-screen bg-primary" />,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <AboutSection 
      profileImages={[
        '/images/profile/profile.JPG',
        '/images/profile/profile2.jpg',
        '/images/profile/profile3.jpg',
        '/images/profile/profile4.jpg',
        '/images/profile/profile5.jpg',
        '/images/profile/profile6.jpg',
        '/images/profile/profile7.jpg',
        '/images/profile/profile8.JPG',
        '/images/profile/profile9.jpg',
        '/images/profile/profile10.jpg',
        '/images/profile/profile11.jpg',
        '/images/profile/profile12.jpg',
        '/images/profile/profile13.jpg',
        '/images/profile/profile14.JPG',
        '/images/profile/profile15.JPG',
        '/images/profile/profile16.JPG',
      ]}
      />

      {/* Projects Section - FULL FEATURED */}
      <ProjectsSection />

      <SkillsSection />

      <GallerySection />

      <ResumeSection />

      <CertificatesSection />

      <ContactSection />

      {/* Tech Stack Marquee - Infinite scrolling showcase of technologies */}
      <TechStackMarquee />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-secondary text-center text-gray-500">
        <p>&copy; 2026 | James Aries G. Santiago. All rights reserved.</p>
      </footer>
    </div>
  );
}
