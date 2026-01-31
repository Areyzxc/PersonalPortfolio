export interface Game {
  id: string;
  title: string;
  description: string;
  artwork: string;
  status: 'currently-playing' | 'completed' | 'wishlist' | 'on-pause';
  rating: number; // 1-5
  platforms: ('PC' | 'Mobile' | 'Console' | 'Web')[];
  playTime?: string; // e.g., "45 hours"
  completionPercentage?: number; // 0-100
  gameplayTips?: string[];
  achievementsUnlocked?: string[];
  favoritesMoments?: string[];
  storeLink?: string;
  youtubeLink?: string;
}

export const gamesData: Game[] = [
  {
    id: '1',
    title: 'Geometry Dash',
    description:
      'An addictive rhythm-based platformer featuring fast-paced action and geometric shapes. Master challenging levels through precise timing and reflexes.',
    artwork: '/images/games/geometry-dash.jpg',
    status: 'currently-playing',
    rating: 5,
    platforms: ['PC', 'Mobile', 'Web'],
    playTime: '120+ hours',
    completionPercentage: 45,
    gameplayTips: [
      'Master the cube jump mechanic for consistent performance',
      'Practice timing on spikes - they reset your progress',
      'Use practice mode to memorize difficult sections',
      'Watch tutorial videos from top players for techniques',
      'Listen to music rhythm to anticipate obstacles',
    ],
    achievementsUnlocked: [
      'Completed 10 Demon levels',
      'Collected 50+ user coins',
      'Achieved 1000+ attempts on a single level',
      'Speed-run completion records',
      'Mastered all basic wave mechanics',
    ],
    favoritesMoments: [
      'First time beating an Insane demon level after weeks of practice',
      'Successfully completing a challenging platformer section on first try',
      'Discovering a hidden shortcut that saves 15 seconds per run',
      'Competing with friends for fastest completion times',
      'Unlocking secret levels with easter eggs',
    ],
    storeLink: 'https://store.steampowered.com/app/322170/Geometry_Dash/',
    youtubeLink: 'https://www.youtube.com/results?search_query=geometry+dash+gameplay',
  },
];

// Helper functions
export const getGameByStatus = (status: Game['status']): Game[] => {
  return gamesData.filter((game) => game.status === status);
};

export const getAllPlatforms = (): string[] => {
  const platforms = new Set<string>();
  gamesData.forEach((game) => game.platforms.forEach((p) => platforms.add(p)));
  return Array.from(platforms);
};

export const getGamesByPlatform = (platform: string): Game[] => {
  return gamesData.filter((game) => game.platforms.includes(platform as any));
};

export const searchGames = (query: string): Game[] => {
  const lowerQuery = query.toLowerCase();
  return gamesData.filter(
    (game) =>
      game.title.toLowerCase().includes(lowerQuery) ||
      game.description.toLowerCase().includes(lowerQuery)
  );
};
