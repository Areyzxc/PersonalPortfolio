// Certificates data for easy management
// Add, edit, or remove certificates here without touching the component

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string; // Path to certificate image
  credentialUrl?: string; // Link to verify credential
  date: string; // "2024-01" or "2024"
  category: string; // "Cloud", "Web Development", "Data Science", etc.
  skills?: string[];
}

export const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Cloud and DevOps Basics',
    issuer: 'Department of Information and Communications Technology (DICT) - Cordillera Administrative Region (CAR), Philippines',
    image: '/images/certificates/Cloud-and-DevOps-Basics.png',
    credentialUrl: 'https://mail.google.com/mail/u/0/#inbox/FMfcgzQdzmXMnnZTkdrDrvhkFGRmDxfj',
    date: 'November 18, 2025',
    category: 'Cloud',
    skills: ['Cloud Architecture', 'Infrastructure as Code', 'CI/CD', 'DevOps Principles'],
  },
  {
    id: '3',
    title: 'Introduction to Data Science',
    issuer: 'DICT - Cisco Networking Academy',
    image: '/images/certificates/introduction-to-data-science.jpg',
    credentialUrl: 'https://cloud.google.com/certification/cloud-engineer',
    date: 'October 20, 2025',
    category: 'Data Science',
    skills: ['Data Analysis', 'Data Insertion', 'Data Engineering'],
  },
  {
    id: '4',
    title: 'AI in Cybersecurity for the Philippines\' Digital Future',
    issuer: 'PECB Regional Webinars',
    image: '/images/certificates/PECB-regional-webinar.jpg',
    credentialUrl: '', // Leave empty if you don't have a public link, or link to the PDF if hosted.
    date: 'October 30, 2025',
    category: 'Cybersecurity',
    skills: ['Artificial Intelligence', 'Cybersecurity Awareness', 'Digital Transformation'],
  },
  {
    id: '5',
    title: 'AI Ready ASEAN Hour of Code Training',
    issuer: 'ASEAN Foundation & Google.org',
    image: '/images/certificates/ai-ready-asean.jpg',
    credentialUrl: '', 
    date: 'November 12, 2025',
    category: 'Artificial Intelligence',
    skills: ['AI Fundamentals', 'Hour of Code', 'Digital Literacy'],
  },
  {
    id: '6',
    title: 'DevSecOps: Integrating Security into the Software Development Lifecycle',
    issuer: 'West Visayas State University',
    image: '/images/certificates/devsecops-wvsu.png',
    credentialUrl: '',
    date: 'October 17, 2025',
    category: 'DevOps & Security',
    skills: ['DevSecOps', 'Secure SDLC', 'Software Security'],
  },
  {
    id: '7',
    title: 'Introduction to Cybersecurity Awareness',
    issuer: 'HP LIFE Foundation',
    image: '/images/certificates/hp-life-cybersecurity.png',
    credentialUrl: '', 
    date: 'June 22, 2025',
    category: 'Cybersecurity',
    skills: ['Cyber Threats', 'Data Protection', 'Security Basics'],
  },
  {
    id: '8',
    title: 'Agile Project Management',
    issuer: 'HP LIFE Foundation',
    image: '/images/certificates/hp-life-agile.png',
    credentialUrl: '',
    date: 'July 20, 2025',
    category: 'Project Management',
    skills: ['Scrum', 'Kanban', 'Iterative Development', 'MVP Strategy'],
  },
  {
    id: '9',
    title: 'Business Email Communication',
    issuer: 'HP LIFE Foundation',
    image: '/images/certificates/hp-life-business-email.png',
    credentialUrl: '',
    date: 'June 22, 2025',
    category: 'Professional Development',
    skills: ['Business Writing', 'Email Etiquette', 'Professional Communication'],
  },
  {
    id: '10',
    title: 'Mental Health and Academic Well-being for Researchers',
    issuer: 'Taguig City University & ISTREL',
    image: '/images/certificates/tcu-research-wellbeing.png',
    credentialUrl: '',
    date: 'April 13, 2025',
    category: 'Research & Personal Development',
    skills: ['Academic Research', 'Mental Resilience', 'Work-Life Balance'],
  },
  {
    id: '11',
    title: '1st International Student Research Congress 2024 [ISRC2024] - Empowering Students through Research and Development',
    issuer: 'Taguig City University & ISTREL',
    image: '/images/certificates/istrel-isrc2024.png',
    credentialUrl: '',
    date: 'September 30, 2024',
    category: 'Research & Development',
    skills: ['Academic Research', 'International Conference', 'Student Development'],
  },
  {
    id: '12',
    title: '1st International Conference on Data Science, AI, Computing, and IT [ICDSAICIT2024]',
    issuer: 'ISTREL & Taguig City University',
    image: '/images/certificates/istrel-icdsaicit2024.png',
    credentialUrl: '',
    date: 'August 25, 2024',
    category: 'Data Science & AI',
    skills: ['Data Science', 'Artificial Intelligence', 'Future Computing'],
  },
  {
    id: '13',
    title: '1st International Conference on Business and Social Sciences 2024 [ICBSS2024]',
    issuer: 'ISTREL & Taguig City University',
    image: '/images/certificates/istrel-icbss2024.png',
    credentialUrl: '',
    date: 'August 27, 2024',
    category: 'Business & Social Sciences',
    skills: ['Business Context', 'Social Dynamics', 'Professional Networking'],
  },
  {
    id: '14',
    title: 'Data Analytics: Trends of Tomorrow',
    issuer: 'Pateros Technological College & JPCS',
    image: '/images/certificates/ptc-data-analytics.jpg',
    credentialUrl: '',
    date: 'November 21, 2023',
    category: 'Data Analytics',
    skills: ['Data Analysis', 'Future Trends', 'Business Intelligence'],
  },
  {
    id: '15',
    title: 'Cybersecurity Armor: Shielding Your Data in the Digital Age',
    issuer: 'Pateros Technological College & JPCS',
    image: '/images/certificates/ptc-cybersecurity-armor.jpg',
    credentialUrl: '',
    date: 'October 19, 2023',
    category: 'Cybersecurity',
    skills: ['Data Protection', 'Digital Safety', 'Cyber Hygiene'],
  },
  {
    id: '16',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Pateros Technological College & JPCS',
    image: '/images/certificates/ptc-intro-to-ai.jpg',
    credentialUrl: '',
    date: 'November 11, 2023',
    category: 'Artificial Intelligence',
    skills: ['AI Fundamentals', 'Tech Innovation', 'Future Concepts'],
  },
  {
    id: '17',
    title: 'Certificate of Appreciation: Field Demo Presentation (BSIT-1E)',
    issuer: 'Pateros Technological College',
    image: '/images/certificates/ptc-field-demo.jpg',
    credentialUrl: '',
    date: 'June 24, 2023',
    category: 'Extracurricular & Teamwork',
    skills: ['Team Collaboration', 'Sportsmanship', 'Student Leadership'],
  },
  {
    id: '18',
    title: 'Digital Literacy: UX Wireframe, Strategy & Prototyping',
    issuer: 'Pateros Technological College & JPCS',
    image: '/images/certificates/ptc-ux-design.jpeg',
    credentialUrl: '',
    date: 'January 25, 2023',
    category: 'UI/UX Design',
    skills: ['Figma', 'Adobe Photoshop', 'Wireframing', 'Prototyping'],
  },
  {
    id: '19',
    title: 'Cloud Migration Strategies for Enterprises',
    issuer: 'West Visayas State University',
    image: '/images/certificates/wvsu-cloud-migration.jpg',
    credentialUrl: '',
    date: 'October 18, 2025',
    category: 'Cloud Computing',
    skills: ['Cloud Migration', 'Enterprise Architecture', 'Digital Transformation'],
  },
];

// Helper function to get unique categories
export const getUniqueCertificateCategories = (): string[] => {
  return Array.from(new Set(certificatesData.map((cert) => cert.category))).sort();
};

// Helper function to filter certificates by category
export const filterCertificatesByCategory = (category: string): Certificate[] => {
  return certificatesData.filter((cert) => cert.category === category);
};