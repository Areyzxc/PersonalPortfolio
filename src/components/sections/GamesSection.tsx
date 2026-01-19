'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { gamesData, type Game } from '../../data/gamesData';
import { Star, ChevronDown, ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const statusConfig: Record<Game['status'], { label: string; color: string; icon: string }> = {
  'currently-playing': {
    label: 'Currently Playing',
    color: 'from-green-400 to-emerald-500',
    icon: '▶️',
  },
  completed: {
    label: 'Completed',
    color: 'from-blue-400 to-cyan-500',
    icon: '✅',
  },
  wishlist: {
    label: 'Wishlist',
    color: 'from-purple-400 to-pink-500',
    icon: '📋',
  },
  'on-pause': {
    label: 'On Pause',
    color: 'from-orange-400 to-red-500',
    icon: '⏸️',
  },
};

export const GamesSection = () => {
  const [expandedGame, setExpandedGame] = useState<string | null>(null);

  return (
    <section
      id="games"
      className="min-h-screen py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary/50 light-mode:from-white light-mode:to-gray-50 terminal-mode:from-emerald-950 terminal-mode:to-emerald-950/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light light-mode:from-blue-600 light-mode:to-blue-400 terminal-mode:from-emerald-300 terminal-mode:to-emerald-400">
            🎮 Games I'm Playing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto light-mode:text-gray-600 terminal-mode:text-emerald-200">
            My gaming journey and favorite titles
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="space-y-8"
        >
          <AnimatePresence mode="wait">
            {gamesData.map((game, index) => {
              const status = statusConfig[game.status];
              const isExpanded = expandedGame === game.id;

              return (
                <motion.div
                  key={game.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Game Card - Artwork Showcase Design */}
                  <motion.div
                    className="group cursor-pointer"
                    onClick={() =>
                      setExpandedGame(isExpanded ? null : game.id)
                    }
                    whileHover={{ y: -8 }}
                  >
                    <div
                      className={`
                        relative rounded-xl overflow-hidden
                        bg-gradient-to-r ${status.color}
                        p-1 transition-all duration-300
                        light-mode:shadow-lg terminal-mode:shadow-lg
                      `}
                    >
                      {/* Inner card container */}
                      <div
                        className={`
                          relative h-96 rounded-lg overflow-hidden
                          bg-secondary/80 backdrop-blur-sm
                          light-mode:bg-white light-mode:bg-opacity-95
                          terminal-mode:bg-emerald-950/80
                        `}
                      >
                        {/* Artwork Background */}
                        <div className="absolute inset-0">
                          <Image
                            src={game.artwork}
                            alt={game.title}
                            fill
                            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent light-mode:from-white light-mode:via-white/30 terminal-mode:from-emerald-950 terminal-mode:via-emerald-950/50" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative h-full flex flex-col justify-between p-8">
                          {/* Top Section: Status & Rating */}
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{status.icon}</span>
                              <span
                                className={`
                                  px-4 py-2 rounded-full font-bold text-sm
                                  bg-gradient-to-r ${status.color}
                                  text-white shadow-lg
                                `}
                              >
                                {status.label}
                              </span>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex items-center gap-1 bg-secondary/50 px-3 py-2 rounded-lg backdrop-blur-sm light-mode:bg-white/70 terminal-mode:bg-emerald-900/50">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${
                                    i < game.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-400'
                                  }`}
                                />
                              ))}
                              <span className="ml-2 font-semibold text-sm text-foreground light-mode:text-gray-900 terminal-mode:text-emerald-200">
                                {game.rating}/5
                              </span>
                            </div>
                          </div>

                          {/* Bottom Section: Title & CTA */}
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground light-mode:text-gray-900 terminal-mode:text-emerald-200">
                              {game.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2 light-mode:text-gray-600 terminal-mode:text-emerald-200">
                              {game.description}
                            </p>

                            {/* Platform Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {game.platforms.map((platform) => (
                                <span
                                  key={platform}
                                  className={`
                                    px-3 py-1 text-xs font-semibold rounded-full
                                    bg-secondary/70 text-accent
                                    border border-accent/30
                                    light-mode:bg-blue-50 light-mode:text-blue-600 light-mode:border-blue-200
                                    terminal-mode:bg-emerald-900/50 terminal-mode:text-emerald-300
                                  `}
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>

                            {/* Progress & Expand Button */}
                            <div className="flex items-center justify-between">
                              {game.completionPercentage !== undefined && (
                                <div className="flex items-center gap-2 flex-1">
                                  <div className="h-2 bg-secondary/50 rounded-full flex-1 overflow-hidden light-mode:bg-gray-200 terminal-mode:bg-emerald-900/50">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-accent to-accent-light light-mode:from-blue-500 light-mode:to-blue-400 terminal-mode:from-emerald-400 terminal-mode:to-emerald-300"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${game.completionPercentage}%` }}
                                      transition={{ duration: 1, delay: 0.3 }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-foreground whitespace-nowrap light-mode:text-gray-900 terminal-mode:text-emerald-200">
                                    {game.completionPercentage}%
                                  </span>
                                </div>
                              )}
                              <motion.button
                                className="ml-4 flex items-center gap-2 text-accent font-semibold group-hover:text-accent-light light-mode:text-blue-600 light-mode:group-hover:text-blue-400 terminal-mode:text-emerald-300 terminal-mode:group-hover:text-emerald-200"
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                Details
                                <ChevronDown size={20} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Details Section */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 rounded-lg bg-secondary/30 border border-accent/20 overflow-hidden light-mode:bg-gray-100 light-mode:border-gray-300 terminal-mode:bg-emerald-900/30 terminal-mode:border-emerald-600/30"
                        >
                          <div className="p-6 space-y-6">
                            {/* Play Time & Completion */}
                            {game.playTime && (
                              <div>
                                <h4 className="text-sm font-bold text-accent mb-2 uppercase tracking-wide light-mode:text-blue-600 terminal-mode:text-emerald-300">
                                  ⏱️ Play Time
                                </h4>
                                <p className="text-foreground light-mode:text-gray-900 terminal-mode:text-emerald-200">
                                  {game.playTime}
                                </p>
                              </div>
                            )}

                            {/* Gameplay Tips */}
                            {game.gameplayTips && game.gameplayTips.length > 0 && (
                              <div>
                                <h4 className="text-sm font-bold text-accent mb-3 uppercase tracking-wide light-mode:text-blue-600 terminal-mode:text-emerald-300">
                                  💡 Gameplay Tips
                                </h4>
                                <ul className="space-y-2">
                                  {game.gameplayTips.map((tip, i) => (
                                    <li key={i}>
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-2 text-sm text-gray-400 light-mode:text-gray-700 terminal-mode:text-emerald-200"
                                      >
                                        <span className="text-accent mt-0.5 flex-shrink-0 light-mode:text-blue-600 terminal-mode:text-emerald-400">
                                          ✓
                                        </span>
                                        <span>{tip}</span>
                                      </motion.div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Achievements Unlocked */}
                            {game.achievementsUnlocked && game.achievementsUnlocked.length > 0 && (
                              <div>
                                <h4 className="text-sm font-bold text-accent mb-3 uppercase tracking-wide light-mode:text-blue-600 terminal-mode:text-emerald-300">
                                  🏆 Achievements Unlocked
                                </h4>
                                <ul className="space-y-2">
                                  {game.achievementsUnlocked.map((achievement, i) => (
                                    <li key={i}>
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-2 text-sm text-gray-400 light-mode:text-gray-700 terminal-mode:text-emerald-200"
                                      >
                                        <span className="text-yellow-400 mt-0.5 flex-shrink-0">
                                          ⭐
                                        </span>
                                        <span>{achievement}</span>
                                      </motion.div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Favorite Moments */}
                            {game.favoritesMoments && game.favoritesMoments.length > 0 && (
                              <div>
                                <h4 className="text-sm font-bold text-accent mb-3 uppercase tracking-wide light-mode:text-blue-600 terminal-mode:text-emerald-300">
                                  ✨ Favorite Moments
                                </h4>
                                <ul className="space-y-2">
                                  {game.favoritesMoments.map((moment, i) => (
                                    <li key={i}>
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-2 text-sm text-gray-400 light-mode:text-gray-700 terminal-mode:text-emerald-200"
                                      >
                                        <span className="text-pink-400 mt-0.5 flex-shrink-0">
                                          💫
                                        </span>
                                        <span>{moment}</span>
                                      </motion.div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Action Links */}
                            <div className="flex gap-3 pt-4 border-t border-accent/20 light-mode:border-gray-300 terminal-mode:border-emerald-600/30">
                              {game.storeLink && (
                                <motion.a
                                  href={game.storeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-sm light-mode:bg-blue-600 light-mode:hover:bg-blue-700 terminal-mode:bg-emerald-600 terminal-mode:hover:bg-emerald-500 terminal-mode:text-black"
                                >
                                  <ExternalLink size={16} />
                                  Store Page
                                </motion.a>
                              )}
                              {game.youtubeLink && (
                                <motion.a
                                  href={game.youtubeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-sm"
                                >
                                  <Play size={16} />
                                  Gameplay Video
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {gamesData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg light-mode:text-gray-600 terminal-mode:text-emerald-300">
              No games added yet. Check back soon! 🎮
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
