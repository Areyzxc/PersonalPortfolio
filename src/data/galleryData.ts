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
    src: '/images/gallery/Garden.jpg',
    alt: 'Garden',
    title: 'Garden Viewpoint',
    description: 'Breathtaking views from the garden with vibrant flowers and lush greenery.',
    category: 'Travel',
    date: '2025-11-23',
  },
  {
    id: '2',
    src: '/images/gallery/Travel2.JPG',
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
  {
    id: '9',
    src: '/images/gallery/Tree.jpg',
    alt: 'Sky View',
    title: 'Sky View',
    description: 'An ethereal view of the sky through the trees during my travel adventure at random moments.',
    category: 'Travel',
    date: '2023-05-29',
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
    src: '/images/gallery/Capstone1.JPG',
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
  {
    id: '12',
    src: '/images/gallery/Events-3.jpg',
    alt: 'Lawson Food Trip',
    title: 'Lawson Food Trip',
    description: 'Me and my friends enjoying a food trip at Lawson after video shooting for our project.',
    category: 'Events',
    date: '2023-03-15',
  },
  {
    id: '13',
    src: '/images/gallery/Event-2.jpg',
    alt: 'Capstone Bookbind Done',
    title: 'Capstone Bookbind Done',
    description: 'Finally done with our Capstone Project bookbind. It has been submitted already. Worth the effort!',
    category: 'Events',
    date: '2026-01-09',
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
  {
    id: '10',
    src: '/images/gallery/Personal-3.jpg',
    alt: 'Caretaker Work',
    title: 'Caretaker Work',
    description: 'I took this one while doing my caretaker duties at a private estate. There are lots of cats around! and some fancy cars too.',
    category: 'Personal',
    date: '2023-07-17',
  },
  {
    id: '11',
    src: '/images/gallery/Personal-4.jpg',
    alt: 'Personal Workspace',
    title: 'Personal Workspace',
    description: 'My personal workspace setup where I code, research, design, and manage projects/files. And to also watch anime/movies and listen to music during breaks.',
    category: 'Personal',
    date: '2023-08-19',
  },
  {
    id: '14',
    src: '/images/gallery/Personal-5.jpg',
    alt: 'Me at the Wright Park',
    title: 'Me at the Wright Park',
    description: 'Enjoying a peaceful day at Wright Park, taking in the ethereal scenery and fresh air. Just standing there feels so calming and refreshing, wondering with my thoughts.',
    category: 'Personal',
    date: '2024-12-29',
  },
  {
    id: '15',
    src: '/images/gallery/Personal-6.jpg',
    alt: 'A compass in hand',
    title: 'A compass in hand',
    description: 'I\'m just holding an antique compass, symbolizing direction and adventure in life. I wish I brought this during my travels and at home!',
    category: 'Personal',
    date: '2024-12-27',
  }


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
