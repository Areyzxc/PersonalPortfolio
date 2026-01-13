// Project filtering and sorting utilities

import { Project } from '../../data/projectsData';

/**
 * Filter projects by category
 */
export function filterByCategory(projects: Project[], category: string | null): Project[] {
  if (!category) return projects;
  return projects.filter((p) => p.category === category);
}

/**
 * Filter projects by technology
 */
export function filterByTechnology(projects: Project[], technology: string | null): Project[] {
  if (!technology) return projects;
  return projects.filter((p) => p.technologies.includes(technology));
}

/**
 * Filter projects by year
 */
export function filterByYear(projects: Project[], year: number | null): Project[] {
  if (!year) return projects;
  return projects.filter((p) => p.year === year);
}

/**
 * Apply all filters
 */
export function applyFilters(
  projects: Project[],
  filters: {
    category: string | null;
    technology: string | null;
    year: number | null;
  }
): Project[] {
  let filtered = projects;

  if (filters.category) {
    filtered = filterByCategory(filtered, filters.category);
  }

  if (filters.technology) {
    filtered = filterByTechnology(filtered, filters.technology);
  }

  if (filters.year) {
    filtered = filterByYear(filtered, filters.year);
  }

  return filtered;
}

/**
 * Sort projects by featured first, then by year (newest first)
 */
export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    // Featured projects first
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    // Then by year (newest first)
    return b.year - a.year;
  });
}

/**
 * Search projects by title or description
 */
export function searchProjects(projects: Project[], query: string): Project[] {
  if (!query.trim()) return projects;

  const lowerQuery = query.toLowerCase();

  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get project by ID
 */
export function getProjectById(projects: Project[], id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/**
 * Get similar projects (same category or shared technologies)
 */
export function getSimilarProjects(projects: Project[], currentProject: Project, limit = 3): Project[] {
  const similar = projects.filter(
    (p) =>
      p.id !== currentProject.id &&
      (p.category === currentProject.category ||
        p.technologies.some((tech) => currentProject.technologies.includes(tech)))
  );

  return similar.slice(0, limit);
}

/**
 * Get project statistics
 */
export function getProjectStats(projects: Project[]) {
  return {
    total: projects.length,
    featured: projects.filter((p) => p.featured).length,
    byCategory: projects.reduce(
      (acc, p) => ({
        ...acc,
        [p.category]: (acc[p.category as keyof typeof acc] || 0) + 1,
      }),
      {} as Record<string, number>
    ),
    byYear: projects.reduce(
      (acc, p) => ({
        ...acc,
        [p.year]: (acc[p.year] || 0) + 1,
      }),
      {} as Record<number, number>
    ),
    mostUsedTechs: getMostUsedTechnologies(projects),
  };
}

/**
 * Get most used technologies
 */
export function getMostUsedTechnologies(projects: Project[], limit = 5): string[] {
  const techCount = new Map<string, number>();

  projects.forEach((p) => {
    p.technologies.forEach((tech) => {
      techCount.set(tech, (techCount.get(tech) || 0) + 1);
    });
  });

  return Array.from(techCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map((entry) => entry[0]);
}
