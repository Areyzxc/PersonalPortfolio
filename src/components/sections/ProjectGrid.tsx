'use client';

import { Project } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onCardClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onCardClick }) => {
  if (projects.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400 text-lg light-mode:text-gray-600 terminal-mode:text-emerald-300">
          No projects found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          featured={project.featured}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};
