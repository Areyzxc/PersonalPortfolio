'use client';

import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  technologies: string[];
  years: number[];
  selectedCategory: string | null;
  selectedTechnology: string | null;
  selectedYear: number | null;
  onCategoryChange: (category: string | null) => void;
  onTechnologyChange: (technology: string | null) => void;
  onYearChange: (year: number | null) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  technologies,
  years,
  selectedCategory,
  selectedTechnology,
  selectedYear,
  onCategoryChange,
  onTechnologyChange,
  onYearChange,
}) => {
  const filterButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05 },
    }),
  };

  const Button = ({
    value,
    label,
    isSelected,
    onClick,
    index,
  }: {
    value: string | number | null;
    label: string;
    isSelected: boolean;
    onClick: () => void;
    index: number;
  }) => (
    <motion.button
      custom={index}
      variants={filterButtonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
        ${
          isSelected
            ? 'bg-accent text-white border border-accent light-mode:bg-blue-600 light-mode:border-blue-600 terminal-mode:bg-emerald-500 terminal-mode:border-emerald-500'
            : 'bg-secondary/50 text-foreground border border-accent/20 hover:border-accent/50 light-mode:bg-gray-100 light-mode:text-gray-900 light-mode:border-gray-300 light-mode:hover:border-blue-400 terminal-mode:bg-emerald-950/30 terminal-mode:text-emerald-300 terminal-mode:border-emerald-600/50 terminal-mode:hover:border-emerald-400'
        }
      `}
    >
      {label}
    </motion.button>
  );

  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider light-mode:text-gray-600 terminal-mode:text-emerald-300">
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              value={null}
              label="All"
              isSelected={selectedCategory === null}
              onClick={() => onCategoryChange(null)}
              index={0}
            />
            {categories.map((cat, idx) => (
              <Button
                key={cat}
                value={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                isSelected={selectedCategory === cat}
                onClick={() => onCategoryChange(selectedCategory === cat ? null : cat)}
                index={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider light-mode:text-gray-600 terminal-mode:text-emerald-300">
            Technology
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              value={null}
              label="All"
              isSelected={selectedTechnology === null}
              onClick={() => onTechnologyChange(null)}
              index={0}
            />
            {technologies.map((tech, idx) => (
              <Button
                key={tech}
                value={tech}
                label={tech}
                isSelected={selectedTechnology === tech}
                onClick={() => onTechnologyChange(selectedTechnology === tech ? null : tech)}
                index={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider light-mode:text-gray-600 terminal-mode:text-emerald-300">
            Year
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              value={null}
              label="All"
              isSelected={selectedYear === null}
              onClick={() => onYearChange(null)}
              index={0}
            />
            {years.map((year, idx) => (
              <Button
                key={year}
                value={year}
                label={year.toString()}
                isSelected={selectedYear === year}
                onClick={() => onYearChange(selectedYear === year ? null : year)}
                index={idx + 1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
