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
  pdfUrl: string;
}

export const resumeData: Resume = {
  // UPDATE HERE: Add your professional summary (brief career overview, 2-3 sentences)
  professionalSummary:
    'Passionate Full-Stack Developer dedicated to creating innovative digital solutions. Experienced in modern web technologies with a strong foundation in computer science and continuous learning through certifications and bootcamp training.',

  summary:
    'Full-Stack Developer with 3+ years of experience building modern web applications. Specialized in React, Next.js, and Node.js with a passion for creating beautiful, functional, and innovative digital experiences. Strong background in full-stack development, cloud technologies, and open-source contributions.',

  experiences: [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full-Stack Developer',
      period: '2024 - Present',
      description:
        'Led development of multiple high-impact projects and mentored junior developers. Architected scalable solutions for enterprise-level applications.',
      achievements: [
        'Reduced application load time by 40% through optimization and code splitting',
        'Mentored 3+ junior developers, improving team productivity by 25%',
        'Implemented CI/CD pipeline reducing deployment time from 30min to 5min',
        'Led successful migration from REST to GraphQL API architecture',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Docker',
        'AWS',
      ],
    },
    {
      company: 'Digital Solutions Co.',
      position: 'Full-Stack Developer',
      period: '2022 - 2024',
      description:
        'Developed and maintained multiple full-stack web applications for various clients. Specialized in frontend development with React and backend with Node.js.',
      achievements: [
        'Built 5+ production web applications serving 50,000+ monthly users',
        'Implemented real-time features using WebSockets improving user engagement',
        'Optimized database queries reducing query time by 60%',
        'Collaborated with design team to implement responsive, pixel-perfect UIs',
      ],
      technologies: [
        'React',
        'JavaScript',
        'Node.js',
        'MongoDB',
        'Tailwind CSS',
        'Git',
        'Vercel',
      ],
    },
    {
      company: 'StartUp Hub',
      position: 'Junior Web Developer',
      period: '2021 - 2022',
      description:
        'Started career building dynamic web applications and learning modern development practices. Contributed to various frontend and backend projects.',
      achievements: [
        'Developed responsive web interfaces using React and CSS',
        'Fixed 100+ bugs improving code quality and user experience',
        'Participated in daily standups and sprint planning',
        'Contributed to documentation and knowledge sharing',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MySQL'],
    },
  ],

  education: [
    {
      school: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2021',
      details: ['GPA: 3.8/4.0', 'Dean\'s List: 2019-2021', 'President of Web Dev Club'],
    },
    {
      school: 'Online Code Academy',
      degree: 'Full-Stack Web Development Bootcamp',
      field: 'Web Development',
      year: '2020',
      details: ['400+ hours of intensive training', 'Capstone Project: E-commerce Platform'],
    },
  ],

  certifications: [
    {
      title: 'Cloud and DevOps Basics',
      issuer: 'Department of Information and Communications Technology (DICT) - Cordillera Administrative Region (CAR), Philippines',
      date: 'November 2025',
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: '2023',
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      date: '2023',
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2022',
    },
  ],

  // UPDATE HERE: Add your language proficiencies (Name, Proficiency level)
  languages: [
    {
      name: 'English',
      proficiency: 'Fluent',
    },
    {
      name: 'Tagalog',
      proficiency: 'Native',
    },
    {
      name: 'Japanese',
      proficiency: 'Intermediate',
    },
  ],

  // UPDATE HERE: Add your awards and achievements (school recognitions, diplomas, awards, etc.)
  awards: [
    {
      title: 'Top 3 Student in Class',
      issuer: 'High School',
      year: '2018',
      description: 'Recognized for academic excellence and outstanding performance',
    },
    {
      title: 'Kindergarten Diploma',
      issuer: 'Early Childhood Education Center',
      year: '2005',
      description: 'Successfully completed kindergarten education',
    },
    {
      title: 'Elementary School Diploma',
      issuer: 'Primary Education Institution',
      year: '2011',
      description: 'Completed 6 years of elementary education',
    },
    {
      title: 'Junior High School Diploma',
      issuer: 'Secondary Education School',
      year: '2014',
      description: 'Completed junior high school with honors',
    },
    {
      title: 'Senior High School Diploma',
      issuer: 'Senior High School',
      year: '2018',
      description: 'Completed senior high school education with distinction',
    },
  ],

  pdfUrl: '/files/James_Aries_Santiago_Resume.pdf', // Add your PDF file here
};
