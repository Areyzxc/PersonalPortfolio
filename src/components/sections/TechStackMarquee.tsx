'use client';

import { SiNextdotjs, SiLucide, SiJson, SiReact, SiTypescript, SiTailwindcss, SiFramer, SiVercel, SiGithub } from 'react-icons/si';
import { FaGitAlt, FaNodeJs, FaMarkdown } from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { FaCss3 } from "react-icons/fa6";
import { IconType } from 'react-icons';

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: Technology[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'CSS3', icon: FaCss3, color: 'text-[#1572B6]' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-white' },
  { name: 'JSON', icon: SiJson, color: 'text-yellow-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
];

const technologies2: Technology[] = [
  { name: 'Lucide Icons', icon: SiLucide, color: 'text-orange-400' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white' },
  { name: 'Markdown', icon: FaMarkdown, color: 'text-gray-500' },
  { name: 'XML', icon: BsFiletypeXml, color: 'text-blue-500' },
  { name: 'Three.js', icon: SiJson, color: 'text-white' },
  { name: 'React Three Fiber', icon: SiReact, color: 'text-[#61DAFB]' },
];

const MarqueeRow = ({ technologies, reverse = false }: { technologies: Technology[]; reverse?: boolean }) => {
  const style = {
    animation: reverse 
      ? 'marquee 25s linear infinite reverse' 
      : 'marquee 25s linear infinite',
  };

  return (
    <div className="relative flex overflow-hidden group">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>

      {/* Marquee Track */}
      <div 
        className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={style}
      >
        {/* First Set */}
        {technologies.map((tech, index) => (
          <div key={`tech-1-${index}`} className="flex items-center gap-3 mx-8 md:mx-12 flex-shrink-0">
            <tech.icon className={`text-3xl md:text-4xl ${tech.color}`} />
            <span className="text-lg font-semibold text-gray-400 hidden md:block whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}

        {/* Duplicate Set (seamless loop) */}
        {technologies.map((tech, index) => (
          <div key={`tech-2-${index}`} className="flex items-center gap-3 mx-8 md:mx-12 flex-shrink-0">
            <tech.icon className={`text-3xl md:text-4xl ${tech.color}`} />
            <span className="text-lg font-semibold text-gray-400 hidden md:block whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TechStackMarquee = () => {
  return (
    <section className="py-10 bg-primary border-y border-white/5 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Powered By Modern Tech
        </p>
        <h3 className="text-xl font-bold mt-2 text-white">
          This personal portfolio is built with:
        </h3>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="mb-6">
        <MarqueeRow technologies={technologies} />
      </div>

      {/* Row 2 - Right to Left (Reverse) */}
      <div>
        <MarqueeRow technologies={technologies2} reverse={true} />
      </div>
    </section>
  );
};
