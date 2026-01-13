// Projects Showcase Data
// Add, edit, or remove projects here without touching the components
// TODO: Add project images to /public/images/projects/ folder and update image paths below

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'fullstack' | 'tools' | 'game';
  technologies: string[];
  image: string; // TODO: Replace with actual image path
  featured: boolean;
  year: number;
  status: 'completed' | 'in-progress' | 'archived';
  demoUrl?: string;
  githubUrl: string;
  youtubeUrl?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    results: string;
  };
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'MangaBrew Cafe',
    description: 'A comprehensive web platform for manga enthusiasts. Features library management, user ratings, and community discussions.',
    fullDescription: 'MangaBrew Cafe is a full-featured manga discovery and community platform that connects manga enthusiasts from around the world. Users can explore a vast manga database, rate and review titles, manage their reading lists, and participate in community discussions. This is a project from Technopreneurship course.',
    category: 'web',
    technologies: ['PHP', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    image: '/images/projects/MangaBrew.png', // TODO: Add actual screenshot to /public/images/projects/
    featured: true,
    year: 2025,
    status: 'completed',
    demoUrl: 'https://mangabrew-cafe.vercel.app',
    githubUrl: 'https://github.com/Areyzxc/MangaBrew-Cafe',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube demo link
    caseStudy: {
      challenge:
        'Create a seamless platform where manga fans can discover, track, and discuss manga titles with real-time updates and community engagement.',
      solution:
        'Built a web application using PHP for server-side logic, Bootstrap for responsive design, JavaScript for interactivity, and HTML/CSS for structure and styling. Database integration enabled dynamic content management and user-generated reviews.',
      results:
        'Successfully deployed platform with 40+ manga titles, user authentication, review system, and community forums. Achieved 95% uptime and sub-500ms response times.',
    },
  },

  {
    id: '2',
    title: 'Tech Blog Platform',
    description: 'A modern blogging platform built with PHP. Features text support, SEO optimization, and dynamic content management.',
    fullDescription:
      'A fully-featured blogging platform designed for tech writers and developers. Supports Markdown editing, automatic SEO optimization, syntax-highlighted code blocks, and a clean reading interface.',
    category: 'web',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Text Editor'],
    image: '/images/projects/blog-placeholder.jpg', // TODO: Add actual screenshot to /public/images/projects/
    featured: true,
    year: 2024,
    status: 'completed',
    demoUrl: 'https://tech-blog-platform.vercel.app',
    githubUrl: 'https://github.com/Areyzxc/Blog',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube demo link
    caseStudy: {
      challenge:
        'Build a high-performance blogging platform that supports Markdown, looks beautiful, and ranks well in search engines.',
      solution:
        'Leveraged Next.js for SSR and static generation, implemented Markdown parsing with syntax highlighting, optimized images with Next.js Image component, and configured meta tags for SEO.',
      results:
        'Delivered production-ready platform with 50+ published articles, automatic sitemap generation, and 98 Lighthouse SEO score.',
    },
  },

  {
    id: '3',
    title: 'An Educational Game System for Teaching Coding Skills and Programming Language at Pateros Technological College',
    description: 'A capstone project titled: "An Educational Game System for Teaching Coding Skills and Programming Language at Pateros Technological College". A web-based game built with old school game development principles. Features 3D backgrounds like Three.js, Typed.js, and interactive gameplay and scoring.',
    fullDescription:
      'A capstone project showcasing mid computer graphics and game development concepts. This game features real-time scoring, background music, leaderboard, and engaging gameplay mechanics with the use of HTML, CSS, JavaScript, Bootstrap, Java, Python, and C++ as the learning scope.',
    category: 'game',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'ScrollReveal.js', 'Typed.js', 'Three.js', 'Bootstrap', '3D Backgrounds', 'Audio Integration', 'Interactive Gameplay', 'Scoring System'],
    image: '/images/projects/CodeGaming.png', // TODO: Add actual screenshot/gameplay video to /public/images/projects/
    featured: true,
    year: 2026,
    status: 'completed',
    demoUrl: 'https://codegaming.gamer.gd', // Link to releases
    githubUrl: 'https://github.com/Areyzxc/CG-Game-Development',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube gameplay video link
    caseStudy: {
      challenge:
        'Students at Pateros Technological College, such as from BSIT and CCS, faced challenges in grasping coding concepts through traditional teaching methods. The goal was to create an engaging educational game that would make learning programming languages fun and interactive.',
      solution:
        'Implemented custom educational game website using PHP, CSS, JavaScript, and HTML, created Three.js scenes for 3D backgrounds, integrated Typed.js for dynamic text effects, and developed interactive gameplay mechanics with scoring system.',
      results:
        'Delivered capstone project with impressive user interaction, smooth 60+ FPS performance, and engaging gameplay mechanics that showcased mastery of graphics programming for novice learners and motivated continued learning.',
    },
  },

  {
    id: '4',
    title: 'System Info Generator',
    description: 'A utility tool that generates and displays system information. Built with cross-platform compatibility for Windows, Mac, and Linux.',
    fullDescription:
      'A powerful system information utility that gathers and displays detailed hardware and software information. Features real-time monitoring, export capabilities, and a clean CLI interface.',
    category: 'tools',
    technologies: ['Python', 'Cross-Platform', 'System APIs', 'CLI'],
    image: '/images/projects/sysinfo-placeholder.jpg', // TODO: Add actual screenshot to /public/images/projects/
    featured: false,
    year: 2023,
    status: 'completed',
    demoUrl: 'https://github.com/Areyzxc/SystemInfoGenerator/releases',
    githubUrl: 'https://github.com/Areyzxc/SystemInfoGenerator',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube demo link
    caseStudy: {
      challenge:
        'Create a cross-platform system information tool that works seamlessly on Windows, Mac, and Linux with detailed hardware insights.',
      solution:
        'Built with Python using platform-specific APIs to gather system information. Designed efficient data collection methods and created intuitive CLI interface for easy usage.',
      results:
        'Delivered reliable tool used for system diagnostics, supporting all major operating systems with comprehensive hardware and software information display.',
    },
  },

  {
    id: '5',
    title: 'Personal Portfolio Website',
    description: 'A modern personal portfolio website to showcase projects, skills, and experience. Built with responsive design and smooth animations.',
    fullDescription:
      'A modern personal portfolio website built with responsive design principles to ensure compatibility across devices. Features smooth animations, project showcases, and an intuitive user interface.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'CSS', 'Framer Motion', 'Responsive Design'],
    image: '/images/projects/portfolio-placeholder.jpg', // TODO: Add actual screenshot to /public/images/projects/
    featured: true,
    year: 2026,
    status: 'completed',
    demoUrl: 'https://areyzxc.github.io/portfolio',
    githubUrl: 'https://github.com/Areyzxc/PersonalPortfolio',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube demo link
    caseStudy: {
      challenge:
        'Create a personal portfolio website that effectively showcases projects, skills, and experience with a modern and responsive design.',
      solution:
        'Developed using React and TypeScript with Framer Motion for animations. Implemented responsive layouts and interactive elements to enhance user engagement.',
      results:
        'Delivered a polished portfolio website that received positive feedback for design and usability, helping to attract potential employers and collaborators.',
    },
  },

  {
    id: '6',
    title: 'Egg Tracker Web App',
    description: 'A modern personal portfolio website to showcase projects, skills, and experience. Built with responsive design and smooth animations.',
    fullDescription:
      'A modern personal portfolio website built with responsive design principles to ensure compatibility across devices. Features smooth animations, project showcases, and an intuitive user interface.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'CSS', 'Framer Motion', 'Responsive Design'],
    image: '/images/projects/portfolio-placeholder.jpg', // TODO: Add actual screenshot to /public/images/projects/
    featured: false,
    year: 2024,
    status: 'completed',
    demoUrl: 'https://areyzxc.github.io/portfolio',
    githubUrl: 'https://github.com/Areyzxc/PersonalPortfolio',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube demo link
    caseStudy: {
      challenge:
        'Create a personal portfolio website that effectively showcases projects, skills, and experience with a modern and responsive design.',
      solution:
        'Developed using React and TypeScript with Framer Motion for animations. Implemented responsive layouts and interactive elements to enhance user engagement.',
      results:
        'Delivered a polished portfolio website that received positive feedback for design and usability, helping to attract potential employers and collaborators.',
    },
  }
];

// Helper to get unique technologies
export function getUniqueTechnologies(): string[] {
  const techs = new Set<string>();
  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => techs.add(tech));
  });
  return Array.from(techs).sort();
}

// Helper to get unique categories
export function getUniqueCategories(): string[] {
  const categories = new Set(projectsData.map((p) => p.category));
  return Array.from(categories);
}

// Helper to get unique years
export function getUniqueYears(): number[] {
  const years = new Set(projectsData.map((p) => p.year));
  return Array.from(years).sort((a, b) => b - a);
}

// Helper to get featured projects
export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}
