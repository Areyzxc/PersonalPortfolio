'use client';

import { HeroSection, AboutSection, SkillsSection, GallerySection, ProjectsSection, ResumeSection, CertificatesSection, HobbiesSection, ContactSection } from '@/src/components/sections';
import { motion } from 'framer-motion';

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

      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-secondary text-center text-gray-500">
        <p>&copy; 2026 | James Aries G. Santiago. All rights reserved.</p>
      </footer>
    </div>
  );
}
