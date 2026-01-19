'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { hobbiesData, getUniqueCategories, type Hobby } from '../../data/hobbiesData';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const HobbiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedHobby, setExpandedHobby] = useState<string | null>(null);

  const categories = getUniqueCategories();
  const filteredHobbies =
    selectedCategory === null
      ? hobbiesData
      : hobbiesData.filter((hobby) => hobby.category === selectedCategory);

  const categoryIcons: Record<string, string> = {
    outdoor: '🌍',
    indoor: '🏠',
    wellness: '💪',
    creative: '🎨',
    social: '👥',
  };

  const categoryLabels: Record<string, string> = {
    outdoor: 'Outdoor',
    indoor: 'Indoor',
    wellness: 'Wellness',
    creative: 'Creative',
    social: 'Social',
  };

  return (
    <section
      id="hobbies"
      className="min-h-screen py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary/50 light-mode:from-white light-mode:to-gray-50 terminal-mode:from-emerald-950 terminal-mode:to-emerald-950/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light light-mode:from-blue-600 light-mode:to-blue-400 terminal-mode:from-emerald-300 terminal-mode:to-emerald-400">
            My Hobbies & Interests
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto light-mode:text-gray-600 terminal-mode:text-emerald-200">
            Exploring passions that fuel my creativity and keep me balanced
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-accent text-white shadow-lg shadow-accent/50 light-mode:bg-blue-600 light-mode:shadow-blue-400/50 terminal-mode:bg-emerald-600 terminal-mode:shadow-emerald-500/50'
                : 'bg-secondary/50 text-foreground hover:bg-secondary border border-accent/20 light-mode:bg-gray-100 light-mode:hover:bg-gray-200 light-mode:border-blue-200 light-mode:text-gray-700 terminal-mode:bg-emerald-900/30 terminal-mode:hover:bg-emerald-900/50 terminal-mode:border-emerald-600/30'
            }`}
          >
            All Hobbies
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/50 light-mode:bg-blue-600 light-mode:shadow-blue-400/50 terminal-mode:bg-emerald-600 terminal-mode:shadow-emerald-500/50'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary border border-accent/20 light-mode:bg-gray-100 light-mode:hover:bg-gray-200 light-mode:border-blue-200 light-mode:text-gray-700 terminal-mode:bg-emerald-900/30 terminal-mode:hover:bg-emerald-900/50 terminal-mode:border-emerald-600/30'
              }`}
            >
              <span>{categoryIcons[category]}</span>
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-max"
        >
          <AnimatePresence mode="wait">
            {filteredHobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-full group cursor-pointer"
                  whileHover={{ y: -8 }}
                  onClick={() =>
                    setExpandedHobby(
                      expandedHobby === hobby.id ? null : hobby.id
                    )
                  }
                >
                  {/* Hobby Card */}
                  <div
                    className={`
                      relative h-full rounded-lg overflow-hidden
                      bg-secondary/50 border border-accent/20
                      transition-all duration-300 hover:border-accent/50
                      flex flex-col p-6
                      light-mode:bg-white light-mode:border-gray-200 light-mode:hover:border-blue-400
                      terminal-mode:bg-emerald-950/30 terminal-mode:border-emerald-600/50 terminal-mode:hover:border-emerald-500
                    `}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-4xl flex-shrink-0">
                          {hobby.icon}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-foreground light-mode:text-gray-900 terminal-mode:text-emerald-200">
                            {hobby.title}
                          </h3>
                          <span
                            className={`
                              inline-block px-3 py-1 text-xs font-semibold rounded-full
                              bg-gradient-to-r ${hobby.color}
                              text-white/90 mb-3
                              light-mode:text-white terminal-mode:text-white/90
                            `}
                          >
                            {categoryIcons[hobby.category]}{' '}
                            {categoryLabels[hobby.category]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 flex-grow light-mode:text-gray-600 terminal-mode:text-emerald-200">
                      {hobby.description}
                    </p>

                    {/* Expand Button */}
                    {hobby.details && hobby.details.length > 0 && (
                      <motion.button
                        className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold group-hover:text-accent-light light-mode:text-blue-600 light-mode:group-hover:text-blue-400 terminal-mode:text-emerald-300 terminal-mode:group-hover:text-emerald-200"
                        animate={{
                          rotate: expandedHobby === hobby.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        Details
                        <ChevronDown size={16} />
                      </motion.button>
                    )}

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {expandedHobby === hobby.id && hobby.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-accent/20 light-mode:border-gray-200 terminal-mode:border-emerald-600/30"
                        >
                          <ul className="space-y-2">
                            {hobby.details.map((detail, i) => (
                              <li key={i}>
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-2 text-sm text-gray-400 light-mode:text-gray-600 terminal-mode:text-emerald-200"
                                >
                                  <span className="text-accent mt-1 flex-shrink-0 light-mode:text-blue-600 terminal-mode:text-emerald-400">
                                    ✓
                                  </span>
                                  <span>{detail}</span>
                                </motion.div>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredHobbies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg light-mode:text-gray-600 terminal-mode:text-emerald-300">
              No hobbies found in this category. Try another filter!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
