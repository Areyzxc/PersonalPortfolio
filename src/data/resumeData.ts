// Resume & CV data for easy management
// Add, edit, or remove experience/education here without touching the component

export interface Experience {
  company: string;
  position: string;
  period: string; // "2023 - Present" or "2023 - 2024"
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  year: string;
  details?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface Resume {
  // UPDATE HERE: Customize your professional summary below
  professionalSummary: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  awards: Award[];
  resumePdfUrl: string; // UPDATE HERE: Path to Resume PDF
  cvPdfUrl: string; // UPDATE HERE: Path to CV PDF
}

export const resumeData: Resume = {
  // UPDATE HERE: Brief "Hero" Bio
  // Added: "DevSecOps" and "18+ Certifications" to capture your new uploads.
  professionalSummary:
    'Motivated BSIT Senior (Class of 2026) and Lead Full-Stack Developer specializing in secure web architecture and DevSecOps principles. Bridging the gap between robust backend systems (PHP/MySQL) and modern frontend ecosystems (Next.js, TypeScript), backed by a diverse portfolio of 18+ certifications in Cybersecurity, AI, and Agile Project Management.',

  // UPDATE HERE: Detailed "About Me"
  // Added: UI/UX Design (Figma), Agile/Scrum, and grouped your tech list for better readability.
  summary:
    'Graduating IT student with a multi-disciplinary background spanning full-cycle web development, system administration, and digital design. Served as the Lead Developer for the capstone project titled "An Educational Game System for Teaching Coding Skills...", architecting a secure, web-based gamified platform using Object-Oriented PHP and normalized MySQL databases. Currently expanding technical expertise into the React ecosystem (Next.js, Tailwind) and exploring advanced engineering concepts in Cloud (Docker, PostgreSQL), Mobile (Flutter), and Machine Learning (TensorFlow). My development process is grounded in Agile methodologies (Scrum/Kanban) and UI/UX best practices (Figma), ensuring solutions are not only functional but user-centric and secure. Known for "maximum effort" reliability in unsupervised roles and a proactive, research-driven approach to solving complex technical challenges.',

  experiences: [
    // ENTRY 1: Your Capstone (Crucial to show Developer Experience)
    {
      company: 'Capstone Project (Pateros Technological College)',
      position: 'Lead Full-Stack Developer',
      period: 'May 2025 - Dec 2025',
      description:
        'Architected and developed the capstone project titled: "An Educational Game System for Teaching Coding Skills and Programming Language for Pateros Technological College", a secure, web-based gamified educational system designed to teach programming concepts. Led the full development lifecycle from database normalization to backend logic implementation.',
      achievements: [
        'Designed a normalized 3NF MySQL database ensuring data integrity for student records',
        'Implemented Role-Based Access Control (RBAC) and password hashing for security',
        'Configured local server environments (XAMPP/Apache) for stable testing',
        'Led the integration of gamification features to improve user engagement',
      ],
      technologies: [
        'PHP (OOP)',
        'MySQL',
        'HTML5/CSS3',
        'JavaScript',
        'Bootstrap',
        'XAMPP',
        'Apache',
        'Git',
        'System Admin',
      ],
    },
    // ENTRY 2: Your Estate Job (Shows Work Ethic & Logistics)
    {
      company: 'Philglobal Asia Industrial Corporation',
      position: 'Estate Logistics & Caretaker',
      period: 'June 2023 - July 2023',
      description:
        'Managed logistics, security, and maintenance for a multi-story private estate. Demonstrated high reliability and financial discipline in a completely unsupervised environment.',
      achievements: [
        'Managed inventory logistics and supply distribution across multiple facility hubs',
        'Oversaw security and sanitation protocols, ensuring zero operational incidents',
        'Leveraged contract earnings to self-fund high-performance technical equipment for development',
        'Maintained strict operational schedules for property maintenance',
      ],
      technologies: [
        'Logistics Management',
        'Inventory Control',
        'Financial Planning',
        'Operational Security',
        'Resource Management',
      ],
    },
  ],

  education: [
    {
      school: 'Pateros Technological College',
      degree: 'Bachelor of Science',
      field: 'Information Technology',
      year: '2022 - Present',
      details: ['GPA: 1.33 (1st Year - 1st Sem)', 'Complete Attendance', 'Active Leader and Contributor'],
    },
  ],

  certifications: [
    {
      title: 'Cloud and DevOps Basics',
      issuer: 'Department of Information and Communications Technology (DICT) - Cordillera Administrative Region (CAR)',
      date: 'November 2025',
    },
    {
      title: 'Cloud Migration Strategies for Enterprises',
      issuer: 'West Visayas State University',
      date: 'October 2025',
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Department of Information and Communications Technology (DICT) - Cisco Networking Academy',
      date: 'October 2025',
    },
    {
      title: 'AI in Cybersecurity for the Philippines\' Digital Future',
      issuer: 'PECB Regional Webinars',
      date: 'October 2025',
    },
    {
      title: 'Hour of Code Training',
      issuer: 'AI Ready ASEAN',
      date: 'November 2025',
    },
    {
      title: 'DevOps: Integrating Security into the Software Development Lifecycle',
      issuer: 'West Visayas State University',
      date: 'October 2025',
    },
    {
      title: 'Introduction to Cybersecurity Awareness',
      issuer: 'HP LIFE',
      date: 'June 2025',
    },
    {
      title: 'Agile Project Management',
      issuer: 'HP LIFE',
      date: 'July 2025',
    },
    {
      title: 'Business Email',
      issuer: 'HP LIFE',
      date: 'June 2025',
    },
    {
      title: 'Mental Health and Academic Well-being: Addressing Challenges Faced by Researchers',
      issuer: 'Taguig City University - ISTREL',
      date: 'April 2025',
    },
    {
      title: 'Empowering Students through Research and Development',
      issuer: 'Taguig City University - ISTREL',
      date: 'September 2024',
    },
    {
      title: 'Data Science and Artificial Intelligence: Trends, Applications, and Prospects',
      issuer: 'Taguig City University - ISTREL',
      date: 'August 2024',
    },
    {
      title: 'Navigating the Waves of Change: The Role of Bussiness and Social Sciences in Today\'s Dynamic Environment',
      issuer: 'Taguig City University - ISTREL',
      date: 'August 2024',
    },
    {
      title: 'Data Analtics: Trends of Tomorrow',
      issuer: 'Pateros Technological College - JPCS',
      date: 'August 2023',
    },
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Pateros Technological College - JPCS',
      date: 'November 2023',
    },
    {
      title: 'Cybersecurity Armor: Shielding Your Data in the Digital Age',
      issuer: 'Pateros Technological College - JPCS',
      date: 'October 2023',
    },
    {
      title: 'Digital Literacy: In UI Wirefram & Strategy UI Mock-Up and Prototyping using Figma, Graphic Design using Photoshop',
      issuer: 'Pateros Technological College - JPCS',
      date: 'January 2023',
    },
  ],

  // UPDATE HERE: Add your language proficiencies (Name, Proficiency level)
  languages: [
    {
      name: 'English',
      proficiency: 'Professional',
    },
    {
      name: 'Tagalog',
      proficiency: 'Native',
    },
    {
      name: 'Japanese',
      proficiency: 'Basic',
    },
  ],

  // UPDATE HERE: Add your awards and achievements (school recognitions, diplomas, awards, etc.)
  awards: [
    {
      title: 'Top 3 Student in Class',
      issuer: 'Pateros National High School (Grade 10)',
      year: '2019',
      description: 'Recognized for academic excellence and outstanding performance',
    },
    {
      title: 'Kindergarten Diploma',
      issuer: 'Sto. Rosario Elementary School',
      year: '2009',
      description: 'Successfully completed kindergarten education',
    },
    {
      title: 'Elementary School Diploma',
      issuer: 'Pateros Elementary School',
      year: '2015',
      description: 'Completed 6 years of elementary education',
    },
    {
      title: 'Junior High School Diploma',
      issuer: 'Pateros National High School',
      year: '2019',
      description: 'Completed junior high school with honors (Top 3)',
    },
    {
      title: 'Senior High School Diploma',
      issuer: 'Pateros National High School - Senior High',
      year: '2021',
      description: 'Completed senior high school education with distinction',
    },
  ],

  resumePdfUrl: '/files/James_Aries_Santiago_Resume.pdf', // UPDATE HERE: Add your Resume PDF file path
  cvPdfUrl: '/files/Santiago_JamesAries_ITSupportIntern_Resume.pdf', // UPDATE HERE: Add your CV PDF file path
};
