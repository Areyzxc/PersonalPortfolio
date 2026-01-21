// Gallery data file for easy management
// Add, edit, or remove images here without touching the component

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export const galleryImages: GalleryImage[] = [

  // Travel Category: Add your travel images here
  {
    id: '1',
    src: '/images/gallery/garden.jpg',
    alt: 'Garden',
    title: 'Garden Viewpoint',
    description: 'Breathtaking views from the garden with vibrant flowers and lush greenery.',
    category: 'Travel',
    date: '2025-11-23',
  },
  {
    id: '2',
    src: '/images/gallery/Travel2.jpg',
    alt: 'Baguio City View',
    title: 'High Above Baguio',
    description: 'Beautiful breeze from the pine trees in Baguio City.',
    category: 'Travel',
    date: '2024-12-29',
  },
  {
    id: '7',
    src: '/images/gallery/Cathedral.jpg',
    alt: 'Cathedral',
    title: 'Cathedral Visit',
    description: 'Exploring the historic cathedral with its stunning architecture from Baguio.',
    category: 'Travel',
    date: '2024-12-29',
  },

  // Events Category: Add your event images here
  {
    id: '3',
    src: '/images/gallery/Capstone.jpg',
    alt: 'Capstone Book Submission',
    title: 'Capstone Book Submission',
    description: 'Me and my proponents during our Capstone Project Book Submission event.',
    category: 'Events',
    date: '2026-01-12',
  },
  {
    id: '4',
    src: '/images/gallery/Capstone1.jpg',
    alt: 'Capstone System Checking',
    title: 'Capstone System Checking',
    description: 'Checking the system during our Capstone Project event.',
    category: 'Events',
    date: '2025-10-10',
  },
  {
    id: '8',
    src: '/images/gallery/Certification.jpg',
    alt: 'Certification Event',
    title: 'Certification Event Gathering',
    description: 'Attending a certification event with my fellow classmates.',
    category: 'Events',
    date: '2023-08-29',
  },

  // Personal Category: Add your personal images here
  {
    id: '5',
    src: '/images/gallery/Personal-1.jpg',
    alt: 'At the Market',
    title: 'At the Market',
    description: 'After the food event at our school, I visited the local market to eat with friends.',
    category: 'Personal',
    date: '2023-04-27',
  },
  {
    id: '6',
    src: '/images/gallery/Personal-2.jpg',
    alt: 'Discord Meet-up',
    title: 'Discord Meet-up',
    description: 'Meeting up with friends from Discord for a fun day out with some project discussions.',
    category: 'Personal',
    date: '2024-04-25',
  },

  // 👇 ADD YOUR NEW IMAGES HERE 👇
  // Example of how to add a new image:
  /*
  {
    id: '7',
    src: '/images/gallery/your-category/your-image.jpg',
    alt: 'Alt text for accessibility',
    title: 'Image Title',
    description: 'A brief description of the image.',
    category: 'Your Category',
    date: '2024-11-27',
  },
  */
];
