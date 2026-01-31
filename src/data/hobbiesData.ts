// Icon rendering is handled in HobbiesSection.tsx

export interface Hobby {
  id: string;
  title: string;
  description: string;
  iconType: 'sprout' | 'activity' | 'book' | 'cat';
  categoryIconType: 'globe' | 'home' | 'heart' | 'palette' | 'users';
  category: 'outdoor' | 'indoor' | 'wellness' | 'creative' | 'social';
  image?: string;
  color: string;
  details?: string[];
}

export const hobbiesData: Hobby[] = [
  {
    id: '1',
    title: 'Gardening',
    description: 'Growing vegetables, herbs, and ornamental plants in my personal garden.',
    iconType: 'sprout',
    categoryIconType: 'globe',
    category: 'outdoor',
    image: '/images/gallery/Garden.jpg',
    color: 'from-green-400 to-emerald-500',
    details: [
      'Growing organic vegetables year-round',
      'Cultivating herbs for cooking',
      'Designing landscape layouts',
      'Pest management and composting',
    ],
  },
  {
    id: '2',
    title: 'Badminton',
    description: 'Active sports player enjoying both casual and competitive badminton matches.',
    iconType: 'activity',
    categoryIconType: 'globe',
    category: 'outdoor',
    image: '/images/profile/profile10.jpg',
    color: 'from-blue-400 to-cyan-500',
    details: [
      'Playing 3-4 times per week',
      'Competitive tournament player',
      'Coaching beginners',
      'Improving technique and footwork',
    ],
  },
  {
    id: '3',
    title: 'Reading Books',
    description: 'Passionate about reading various genres including sci-fi, fantasy, and self-improvement.',
    iconType: 'book',
    categoryIconType: 'home',
    category: 'indoor',
    image: '/images/profile/profile5.jpg',
    color: 'from-amber-400 to-orange-500',
    details: [
      'Reading 1-2 books per month',
      'Genres: Sci-Fi, Fantasy, Thriller',
      'Maintaining a reading journal',
      'Exploring indie and classic authors',
    ],
  },
  {
    id: '4',
    title: 'Playing with Cats',
    description: 'Enjoying quality time with my feline friends, interactive play and cuddling.',
    iconType: 'cat',
    categoryIconType: 'users',
    category: 'social',
    image: '/images/profile/profile6.jpg',
    color: 'from-pink-400 to-rose-500',
    details: [
      'Interactive play sessions daily',
      'Training and behavior enrichment',
      'Photography of cats',
      'Understanding feline psychology',
    ],
  },
];

// Additional hobbies can be added here following the same structure\

// Helper functions
export const getHobbiesByCategory = (category: Hobby['category']): Hobby[] => {
  return hobbiesData.filter((hobby) => hobby.category === category);
};

export const getUniqueCategories = (): Hobby['category'][] => {
  const categories = new Set<Hobby['category']>();
  hobbiesData.forEach((hobby) => categories.add(hobby.category));
  return Array.from(categories);
};

export const searchHobbies = (query: string): Hobby[] => {
  const lowerQuery = query.toLowerCase();
  return hobbiesData.filter(
    (hobby) =>
      hobby.title.toLowerCase().includes(lowerQuery) ||
      hobby.description.toLowerCase().includes(lowerQuery)
  );
};
