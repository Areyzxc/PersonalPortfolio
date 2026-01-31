// Projects Showcase Data
// Add, edit, or remove projects here without touching the components
// TODO: Add project images to /public/images/projects/ folder and update image paths below

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'fullstack' | 'tools' | 'game' | 'prototype';
  technologies: string[];
  image: string; // TODO: Replace with actual image path
  featured: boolean;
  year: number;
  status: 'completed' | 'in-progress' | 'archived' | 'prototype';
  demoUrl?: string;
  githubUrl: string;
  githubRepo?: string; // GitHub repo in format: owner/repo
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
    title: 'MangaBrew Cafe (POS Concept)',
    description: 'A hybrid Point-of-Sale (POS) and ordering system concept for a Manga-themed cafe. Integrates food ordering with a digital manga library interface.',
    
    // REFINED: Tells the story of the "Coffee + Manga" business model
    fullDescription: 'Developed as a group project for our Technopreneurship course, MangaBrew Cafe is a web-based prototype for a niche establishment blending Japanese pop culture with a coffee shop experience. The platform serves as a customer-facing ordering kiosk where users can browse a curated menu of coffee and pastries while simultaneously selecting manga titles (like Naruto, JJK, AoT) to read on-site. The system features User Authentication, a functional "Add to Cart" and Checkout flow for calculating total costs, and an Announcements hub for store vouchers and events.',
    
    category: 'prototype', // Changed from generic 'web' to specific 'Prototype'
    
    // UPDATED: Added MySQL and XAMPP based on your description
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5/CSS3', 'XAMPP (Apache)'],
    
    image: '/images/projects/MangaBrew.png',
    featured: true,
    year: 2025,
    status: 'prototype', // Marked as prototype since it's a demo
    
    // Note: If you haven't deployed the PHP backend to Vercel (which is hard to do), 
    // you might want to link to a video demo instead or keep this as a placeholder.
    demoUrl: 'https://mangabrew-cafe.vercel.app', 
    githubUrl: 'https://github.com/Areyzxc/MangaBrew-Cafe',
    githubRepo: 'Areyzxc/MangaBrew-Cafe',
    youtubeUrl: 'https://youtube.com', 
    
    caseStudy: {
      challenge:
        'To conceptualize and prototype a unique "Hybrid Cafe" business model that seamlessly integrates standard food/beverage ordering with a manga rental/tracking system for customers.',
      solution:
        'Built a responsive web interface using Bootstrap for the "J-Pop" aesthetic and a native PHP/MySQL backend to handle CRUD operations. Implemented logic for inventory management (books vs. food), cart summation, and session-based user authentication.',
      results:
        'Successfully demonstrated the business concept to the faculty, featuring a cohesive UI that handles catalog browsing, "Read Status" tracking, and a simulated checkout process for the Point of Sale.',
    },
  },

{
  id: '2',
  title: 'Personal Profile Platform',
  description: 'A modern personal profile platform built with HTML, CSS, and Bootstrap 5. Features an interactive carousel gallery, user account management, and social media integration.',
  fullDescription:
    'A fully-featured personal profile and portfolio platform showcasing a professional account management system. Includes an interactive image carousel, profile information display, social media integration, and a responsive design built with Bootstrap 5. Designed for individual portfolios and personal branding.',
  category: 'web',
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
  image: '/images/projects/personal-account.png', // TODO: Add screenshot of account.html
  featured: true,
  year: 2025,
  status: 'completed',
  demoUrl: 'http://localhost/asset/account.html',
  githubUrl: 'https://github.com/Areyzxc',
  githubRepo: 'Areyzxc/asset',
  youtubeUrl: 'https://youtube.com/@jamesariesg.santiago5852', // TODO: Add actual demo link
  caseStudy: {
    challenge:
      'Create a responsive personal profile platform that showcases user information, gallery, and social media integration with a clean, modern design.',
    solution:
      'Built with Bootstrap 5 for responsive design, implemented carousel gallery for image display, integrated Font Awesome icons for social media links, and created a clean sidebar navigation system.',
    results:
      'Delivered a professional profile platform with interactive carousel, social media integration, and responsive layout that works seamlessly across all device sizes.',
  },
},

  {
    id: '3',
    title: 'An Educational Game System for Teaching Coding Skills and Programming Language at Pateros Technological College',
    description: 'A capstone project titled: "An Educational Game System for Teaching Coding Skills and Programming Language at Pateros Technological College". A web-based game built with old school game development principles. Features 3D backgrounds like Three.js, Typed.js, and interactive gameplay and scoring.',
    fullDescription:
      'A capstone project showcasing mid computer graphics and game development concepts. This game features real-time scoring, background music, leaderboard, and engaging gameplay mechanics with the use of HTML, CSS, JavaScript, Bootstrap, Java, Python, and C++ as the learning scope.',
    category: 'game',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'ScrollReveal.js', 'Typed.js', 'Three.js', 'Bootstrap', '3D Backgrounds', 'Audio Integration', 'REST API', 'CRUD', 'AJAX', 'JSON'],
    image: '/images/projects/CodeGaming.png', // TODO: Add actual screenshot/gameplay video to /public/images/projects/
    featured: true,
    year: 2025,
    status: 'completed',
    demoUrl: 'https://codegaming.gamer.gd', // Link to releases
    githubUrl: 'https://github.com/Areyzxc/CG-Game-Development',
    githubRepo: 'Areyzxc/CG-Game-Development',
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
  description: 'A comprehensive cross-platform utility that collects and displays detailed system information with support for multiple export formats.',
  fullDescription:
    'A powerful system information utility built with Python that gathers real-time hardware and software data across Windows, Mac, and Linux. Supports multiple output formats including text, HTML, JSON, CSV, PDF, and an interactive GUI interface for seamless system diagnostics.',
  category: 'tools',
  technologies: ['Python', 'psutil', 'tkinter', 'reportlab', 'Platform APIs', 'JSON', 'CSV'],
  image: '/images/projects/system-info.png',
  featured: false,
  year: 2025,
  status: 'completed',
  demoUrl: 'https://github.com/Areyzxc/SystemInfoGenerator/releases',
  githubUrl: 'https://github.com/Areyzxc/SystemInfoGenerator',
  githubRepo: 'Areyzxc/SystemInfoGenerator',
  youtubeUrl: 'https://youtube.com',
  caseStudy: {
    challenge:
      'Develop a robust cross-platform system diagnostics tool capable of collecting comprehensive hardware metrics (CPU, memory, disk, network) and presenting data in multiple user-friendly formats.',
    solution:
      'Engineered with modular Python architecture: SystemInfoCollector class for real-time data gathering using psutil and platform APIs, and ReportGenerator class supporting 6 output formats (text, HTML, JSON, CSV, PDF, and interactive tkinter GUI). Implemented cross-platform compatibility for Windows, macOS, and Linux.',
    results:
      'Delivered versatile diagnostic utility with multi-format export capabilities, enabling users to monitor system performance, share reports in preferred formats, and access detailed metrics for CPU cores/frequency, memory usage, disk partitions, network interfaces, and system uptime.',
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
    image: '/images/projects/portfolio.png', // TODO: Add actual screenshot to /public/images/projects/
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
    id: '6', // TODO: Update the needed information here.
    title: 'Real-Time Egg Tracker Web App',
    description: 'A modern real-time web application to track egg inventory and status. Built with responsive design and smooth animations.',
    fullDescription:
      'A modern real-time web application built with responsive design principles to ensure compatibility across devices. Features smooth animations, inventory tracking, and an intuitive user interface.',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'XAMPP'],
    image: '/images/projects/Egg-Tracker.png', // TODO: Add actual screenshot to /public/images/projects/
    featured: false,
    year: 2024,
    status: 'completed',
    demoUrl: 'https://areyzxc.github.io/real-time-egg-tracker',
    githubUrl: 'https://github.com/Areyzxc/real-time-egg-tracker',
    youtubeUrl: 'https://youtube.com', // TODO: Add actual YouTube demo link
    caseStudy: {
      challenge:
        'Create a real-time web application that effectively tracks egg inventory and status with a modern and responsive design.',
      solution:
        'Developed using HTML, CSS, and JavaScript with XAMPP for backend support. Implemented responsive layouts and interactive elements to enhance user engagement.',
      results:
        'Delivered a polished portfolio website that received positive feedback for design and usability, helping to attract potential employers and collaborators.',
    },
  },

  {
  id: '7',
  title: 'Recipe Finder App',
  description: 'A modern React web application for discovering recipes by ingredients with detailed nutritional information and favorites management.',
  fullDescription:
    'Recipe Finder is a full-stack web application built with React and Vite that allows users to search for recipes by ingredients, view detailed nutritional information per serving, and save their favorite recipes. Features a responsive design, real-time API integration with Spoonacular, and persistent local storage for favorites.',
  category: 'mobile',
  technologies: ['React 19', 'Vite', 'Context API', 'Lucide React', 'CSS3', 'Spoonacular API'],
  image: '/images/projects/Recipe-Finder.png', // TODO: Add actual screenshot to /public/images/projects/
  featured: true,
  year: 2025,
  status: 'completed',
  demoUrl: 'https://areyzxc.github.io/recipe-finder-app', // TODO: Replace [USERNAME] with GitHub username and repository name
  githubUrl: 'https://github.com/Areyzxc/recipe-finder-app', // TODO: Add your GitHub repo URL
  githubRepo: 'Areyzxc/recipe-finder-app', // TODO: Update with your GitHub repo path
  youtubeUrl: '', // TODO: Add YouTube demo link if available
  caseStudy: {
    challenge:
      'Create a modern web application that demonstrates React fundamentals, API integration, state management, and responsive design. Build a functional tool that helps users discover recipes based on available ingredients with comprehensive nutritional data.',
    solution:
      'Developed a React-based single-page application using Vite for fast build times. Implemented Context API with useReducer for efficient state management, integrated Spoonacular API with comprehensive error handling, and designed a responsive UI with Lucide React icons. Used CSS3 media queries for mobile-first design and localStorage for persistent favorites.',
    results:
      'Delivered a fully functional recipe discovery application with 8 reusable React components, real-time API integration handling 100+ recipes, responsive design supporting mobile to desktop, and a professional presentation ready for demonstration. Successfully deployed to GitHub Pages with zero-configuration deployment pipeline.',
  },
},

{
    id: '8',
    title: 'Christmas Countdown Website',
    description: 'An interactive Christmas countdown website with music, trivia, games, and travel destination guides. Built with vanilla JavaScript, HTML, and CSS.',
    fullDescription:
      'A festive Christmas countdown application featuring real-time countdown timer, interactive sections for Christmas songs, trivia games, travel destinations, and a wish submission form. Includes animated snow effects, multiple font styling, and responsive navigation.',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vanilla JS'],
    image: '/images/projects/Christmas-time.png', // TODO: Add actual screenshot to /public/images/projects/
    featured: false,
    year: 2024,
    status: 'completed',
    demoUrl: 'ChristmasTime.html',
    githubUrl: '', // TODO: Add GitHub URL if available
    githubRepo: '', // TODO: Add GitHub repo if available
    youtubeUrl: '', // TODO: Add YouTube demo link if available
    caseStudy: {
      challenge:
        'Create an engaging, festive website that combines multiple interactive features (countdown timer, music player, trivia, games, and travel guides) into one cohesive Christmas-themed application.',
      solution:
        'Built with vanilla HTML, CSS, and JavaScript. Implemented countdown timer using Date objects, organized content into separate pages (Games, Songs, Trivia, Places), created a modal form for wish submissions, and added animated elements like snow effects and moving icons.',
      results:
        'Delivered a fully functional Christmas countdown website with interactive sections, form handling, and festive styling. Users can explore Christmas songs, play games, trivia questions, travel destinations, and submit Christmas wishes.',
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