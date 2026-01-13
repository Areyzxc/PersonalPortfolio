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
    id: '2',
    title: 'MongoDB Developer Certification',
    issuer: 'MongoDB University',
    image: '/images/certificates/mongodb-developer.jpg',
    credentialUrl: 'https://university.mongodb.com/courses/verified',
    date: '2023',
    category: 'Databases',
    skills: ['MongoDB', 'NoSQL', 'Database Design'],
  },
  {
    id: '3',
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    image: '/images/certificates/gcp-data-engineer.jpg',
    credentialUrl: 'https://cloud.google.com/certification/cloud-engineer',
    date: '2023',
    category: 'Cloud',
    skills: ['Google Cloud', 'Big Data', 'Data Engineering'],
  },
  {
    id: '4',
    title: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    image: '/images/certificates/react-patterns.jpg',
    credentialUrl: 'https://frontendmasters.com/certificates',
    date: '2022',
    category: 'Web Development',
    skills: ['React', 'JavaScript', 'Advanced Patterns'],
  },
  {
    id: '5',
    title: 'Full-Stack Web Development Bootcamp',
    issuer: 'Online Code Academy',
    image: '/images/certificates/fullstack-bootcamp.jpg',
    credentialUrl: 'https://codeacademy.com/verify',
    date: '2020',
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
  },
  {
    id: '6',
    title: 'Docker & Kubernetes for Developers',
    issuer: 'Linux Academy',
    image: '/images/certificates/docker-kubernetes.jpg',
    credentialUrl: 'https://linuxacademy.com/certificates',
    date: '2023',
    category: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'Containerization'],
  },

  // 👇 ADD YOUR NEW CERTIFICATES HERE 👇
  // Example of how to add a new certificate:
  /*
  {
    id: '7',
    title: 'Certificate Title',
    issuer: 'Organization Name',
    image: '/images/certificates/your-certificate.jpg',
    credentialUrl: 'https://verification-url.com',
    date: '2024',
    category: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  */
];

// Helper function to get unique categories
export const getUniqueCertificateCategories = (): string[] => {
  return Array.from(new Set(certificatesData.map((cert) => cert.category))).sort();
};

// Helper function to filter certificates by category
export const filterCertificatesByCategory = (category: string): Certificate[] => {
  return certificatesData.filter((cert) => cert.category === category);
};
