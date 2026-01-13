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
    src: '/images/gallery/travel-2.jpg',
    alt: 'Beach Sunset',
    title: 'Sunset at the Beach',
    description: 'Beautiful sunset moment captured at the local beach.',
    category: 'Travel',
    date: '2024-05-20',
  },

  // Events Category: Add your event images here
  {
    id: '3',
    src: '/images/gallery/events-1.jpg',
    alt: 'Tech Conference',
    title: 'Tech Conference 2024',
    description: 'Speaking at the annual tech conference.',
    category: 'Events',
    date: '2024-04-10',
  },
  {
    id: '4',
    src: '/images/gallery/events-2.jpg',
    alt: 'Hackathon',
    title: 'Hackathon Victory',
    description: 'Won first place at the 48-hour hackathon event.',
    category: 'Events',
    date: '2024-03-05',
  },

  // Personal Category: Add your personal images here
  {
    id: '5',
    src: '/images/gallery/personal-1.jpg',
    alt: 'Coding Session',
    title: 'Late Night Coding',
    description: 'Working on an exciting new project late into the night.',
    category: 'Personal',
    date: '2024-02-28',
  },
  {
    id: '6',
    src: '/images/gallery/personal-2.jpg',
    alt: 'Coffee & Code',
    title: 'Coffee & Code',
    description: 'My favorite spot for deep work and creative thinking.',
    category: 'Personal',
    date: '2024-02-15',
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
