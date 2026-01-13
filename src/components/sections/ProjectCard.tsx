'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../../data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onCardClick?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  featured = false,
  onCardClick,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.1 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      boxShadow:
        'var(--theme-accent-glow, 0 0 20px rgba(59, 130, 246, 0.3))',
      transition: { duration: 0.3 },
    },
  };

  // Category badge colors
  const categoryColors: Record<string, string> = {
    web: 'bg-blue-500/20 text-blue-300 border-blue-400/50',
    mobile: 'bg-purple-500/20 text-purple-300 border-purple-400/50',
    fullstack: 'bg-green-500/20 text-green-300 border-green-400/50',
    tools: 'bg-orange-500/20 text-orange-300 border-orange-400/50',
    game: 'bg-red-500/20 text-red-300 border-red-400/50',
  };

  const statusColors: Record<string, string> = {
    completed: 'bg-green-500/30 text-green-200',
    'in-progress': 'bg-yellow-500/30 text-yellow-200',
    archived: 'bg-gray-500/30 text-gray-200',
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={featured ? 'md:col-span-2 lg:col-span-2' : ''}
    >
      <motion.div
        variants={hoverVariants}
        whileHover="hover"
        className="h-full group cursor-pointer"
        onClick={() => onCardClick?.(project)}
      >
        {/* Card Container */}
        <div
          className={`
            relative h-full rounded-lg overflow-hidden
            bg-secondary/50 border border-accent/20
            transition-all duration-300 hover:border-accent/50
            flex flex-col
            light-mode:bg-white light-mode:border-gray-200 light-mode:hover:border-blue-400
            terminal-mode:bg-emerald-950/30 terminal-mode:border-emerald-600/50 terminal-mode:hover:border-emerald-500
          `}
        >
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            {project.featured && (
              <span className="px-3 py-1 bg-yellow-500/30 text-yellow-200 text-xs font-semibold rounded-full border border-yellow-500/50 light-mode:bg-yellow-100 light-mode:text-yellow-700 light-mode:border-yellow-300 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-200 terminal-mode:border-emerald-500">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-secondary/30 light-mode:bg-gray-100 terminal-mode:bg-emerald-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority={featured}
            />

            {/* Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-accent/80 hover:bg-accent text-white rounded-full transition-all"
                  title="View Demo"
                >
                  <Play size={20} fill="currentColor" />
                </motion.a>
              )}
              {project.youtubeUrl && (
                <motion.a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-red-600/80 hover:bg-red-600 text-white rounded-full transition-all"
                  title="Watch Demo"
                >
                  <Play size={20} fill="currentColor" />
                </motion.a>
              )}
            </motion.div>

            {/* Year Badge */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-semibold rounded-full light-mode:bg-gray-300 light-mode:text-gray-800">
              {project.year}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col">
            {/* Category & Status */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`
                  px-3 py-1 text-xs font-semibold rounded-full border
                  ${categoryColors[project.category]}
                  light-mode:border-blue-300
                  terminal-mode:border-emerald-400
                `}
              >
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[project.status]}`}>
                {project.status === 'completed' ? '✓ Done' : project.status === 'in-progress' ? '⟳ Building' : '📦 Archived'}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors light-mode:text-gray-900 light-mode:group-hover:text-blue-600 terminal-mode:text-emerald-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 flex-1 light-mode:text-gray-600 terminal-mode:text-emerald-200">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className={`
                      px-2 py-1 text-xs font-medium rounded-md
                      bg-accent/20 text-accent border border-accent/30
                      light-mode:bg-blue-100 light-mode:text-blue-700 light-mode:border-blue-200
                      terminal-mode:bg-emerald-900/50 terminal-mode:text-emerald-300 terminal-mode:border-emerald-600
                    `}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-xs font-medium text-gray-500 light-mode:text-gray-600 terminal-mode:text-emerald-300">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4 border-t border-accent/20 light-mode:border-gray-200 terminal-mode:border-emerald-600">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    flex-1 flex items-center justify-center gap-2 px-3 py-2
                    text-sm font-semibold rounded-lg
                    bg-accent/20 hover:bg-accent/30 text-accent
                    transition-colors duration-300
                    light-mode:bg-blue-100 light-mode:hover:bg-blue-200 light-mode:text-blue-700
                    terminal-mode:bg-emerald-600/30 terminal-mode:hover:bg-emerald-600/50 terminal-mode:text-emerald-300
                  `}
                  title="Visit Live Demo"
                >
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Demo</span>
                </motion.a>
              )}

              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex-1 flex items-center justify-center gap-2 px-3 py-2
                  text-sm font-semibold rounded-lg
                  bg-accent/20 hover:bg-accent/30 text-accent
                  transition-colors duration-300
                  light-mode:bg-blue-100 light-mode:hover:bg-blue-200 light-mode:text-blue-700
                  terminal-mode:bg-emerald-600/30 terminal-mode:hover:bg-emerald-600/50 terminal-mode:text-emerald-300
                `}
                title="View Source Code"
              >
                <Github size={16} />
                <span className="hidden sm:inline">Code</span>
              </motion.a>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick?.(project);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex-1 flex items-center justify-center gap-2 px-3 py-2
                  text-sm font-semibold rounded-lg
                  bg-accent hover:bg-accent-light text-white
                  transition-colors duration-300
                  light-mode:bg-blue-600 light-mode:hover:bg-blue-700 light-mode:text-white
                  terminal-mode:bg-emerald-600 terminal-mode:hover:bg-emerald-500 terminal-mode:text-black
                `}
                title="View Full Details"
              >
                <span className="text-lg">→</span>
                <span className="hidden sm:inline">More</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
