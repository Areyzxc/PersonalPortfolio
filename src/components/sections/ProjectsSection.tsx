'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projectsData, getUniqueTechnologies, getUniqueCategories, getUniqueYears, Project } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { applyFilters, sortProjects } from '../../lib/utils/projectHelpers';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  // Get unique values for filters
  const categories = useMemo(() => getUniqueCategories(), []);
  const technologies = useMemo(() => getUniqueTechnologies(), []);
  const years = useMemo(() => getUniqueYears(), []);

  // Apply filters and sort
  const filteredProjects = useMemo(() => {
    const filtered = applyFilters(projectsData, {
      category: selectedCategory,
      technology: selectedTechnology,
      year: selectedYear,
    });

    return sortProjects(filtered);
  }, [selectedCategory, selectedTechnology, selectedYear]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <>
      <section id="projects" className="py-24 px-4 bg-secondary/30 light-mode:bg-gray-50 terminal-mode:bg-emerald-950/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 light-mode:text-gray-900 terminal-mode:text-emerald-300">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full light-mode:from-blue-600 light-mode:to-blue-400 terminal-mode:from-emerald-500 terminal-mode:to-emerald-300"></div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl light-mode:text-gray-600 terminal-mode:text-emerald-200">
              Explore my latest projects showcasing web development, full-stack applications, games, and tools I've built.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            years={years}
            selectedCategory={selectedCategory}
            selectedTechnology={selectedTechnology}
            selectedYear={selectedYear}
            onCategoryChange={setSelectedCategory}
            onTechnologyChange={setSelectedTechnology}
            onYearChange={setSelectedYear}
          />

          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-gray-400 text-sm light-mode:text-gray-600 terminal-mode:text-emerald-300"
          >
            Showing {filteredProjects.length} of {projectsData.length} projects
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                      featured={project.featured}
                      onCardClick={setExpandedProject}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-16 text-center"
                >
                  <p className="text-gray-400 text-lg light-mode:text-gray-600 terminal-mode:text-emerald-300">
                    No projects found. Try adjusting your filters.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {expandedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedProject(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-16 lg:inset-32 z-50 overflow-y-auto"
            >
              <div
                className="bg-primary rounded-lg shadow-2xl max-w-3xl mx-auto light-mode:bg-white terminal-mode:bg-emerald-950"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-secondary/50 rounded-full transition-colors light-mode:hover:bg-gray-100 terminal-mode:hover:bg-emerald-900"
                >
                  <X size={24} className="text-foreground" />
                </motion.button>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent light-mode:bg-blue-100 light-mode:text-blue-700 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-300">
                        {expandedProject.category.charAt(0).toUpperCase() + expandedProject.category.slice(1)}
                      </span>
                      {expandedProject.featured && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/30 text-yellow-200 light-mode:bg-yellow-100 light-mode:text-yellow-700 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-200">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                      {expandedProject.title}
                    </h2>
                    <p className="text-gray-400 text-lg light-mode:text-gray-600 terminal-mode:text-emerald-200">
                      {expandedProject.year} • {expandedProject.status}
                    </p>
                  </div>

                  {/* Full Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                      Overview
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed light-mode:text-gray-700 terminal-mode:text-emerald-100">
                      {expandedProject.fullDescription}
                    </p>
                  </div>

                  {/* Case Study */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-secondary/50 rounded-lg light-mode:bg-gray-50 light-mode:border light-mode:border-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:border terminal-mode:border-emerald-600">
                    <div>
                      <h4 className="font-semibold mb-2 text-accent light-mode:text-blue-600 terminal-mode:text-emerald-300">
                        Challenge
                      </h4>
                      <p className="text-gray-400 text-sm light-mode:text-gray-600 terminal-mode:text-emerald-200">
                        {expandedProject.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-accent light-mode:text-blue-600 terminal-mode:text-emerald-300">
                        Solution
                      </h4>
                      <p className="text-gray-400 text-sm light-mode:text-gray-600 terminal-mode:text-emerald-200">
                        {expandedProject.caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-accent light-mode:text-blue-600 terminal-mode:text-emerald-300">
                        Results
                      </h4>
                      <p className="text-gray-400 text-sm light-mode:text-gray-600 terminal-mode:text-emerald-200">
                        {expandedProject.caseStudy.results}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {expandedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-accent/20 text-accent light-mode:bg-blue-100 light-mode:text-blue-700 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {expandedProject.demoUrl && (
                      <motion.a
                        href={expandedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-center light-mode:bg-blue-600 light-mode:hover:bg-blue-700 terminal-mode:bg-emerald-600 terminal-mode:hover:bg-emerald-500 terminal-mode:text-black"
                      >
                        🔗 View Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={expandedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-secondary/50 hover:bg-secondary text-foreground font-semibold rounded-lg transition-colors text-center light-mode:bg-gray-200 light-mode:hover:bg-gray-300 light-mode:text-gray-900 terminal-mode:bg-emerald-900 terminal-mode:hover:bg-emerald-800 terminal-mode:text-emerald-300"
                    >
                      💻 View Source Code
                    </motion.a>
                    {expandedProject.youtubeUrl && (
                      <motion.a
                        href={expandedProject.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 font-semibold rounded-lg transition-colors text-center border border-red-600/50 light-mode:bg-red-100 light-mode:hover:bg-red-200 light-mode:text-red-700 light-mode:border-red-300 terminal-mode:bg-emerald-900 terminal-mode:hover:bg-emerald-800 terminal-mode:text-emerald-300"
                      >
                        ▶️ Watch Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
