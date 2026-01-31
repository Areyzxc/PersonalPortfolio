'use client';

import { useGitHubStats } from '../../lib/hooks/useGitHubStats';
import { Star, GitFork, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubStatsProps {
  repoPath?: string;
  className?: string;
}

export const GitHubStats = ({ repoPath, className = '' }: GitHubStatsProps) => {
  const stats = useGitHubStats(repoPath);

  if (stats.loading) {
    return (
      <div className={`flex gap-3 ${className}`}>
        <div className="h-8 w-16 bg-secondary/50 rounded-lg animate-pulse light-mode:bg-gray-200 terminal-mode:bg-emerald-900/50" />
        <div className="h-8 w-16 bg-secondary/50 rounded-lg animate-pulse light-mode:bg-gray-200 terminal-mode:bg-emerald-900/50" />
        <div className="h-8 w-16 bg-secondary/50 rounded-lg animate-pulse light-mode:bg-gray-200 terminal-mode:bg-emerald-900/50" />
      </div>
    );
  }

  if (stats.error) {
    return null; // Silently fail if GitHub API is unavailable
  }

  const statItems = [
    { icon: Star, label: 'Stars', value: stats.stars, color: 'text-yellow-400' },
    { icon: GitFork, label: 'Forks', value: stats.forks, color: 'text-blue-400' },
    { icon: Eye, label: 'Watchers', value: stats.watchers, color: 'text-purple-400' },
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-accent/20 light-mode:bg-blue-50 light-mode:border-blue-200 terminal-mode:bg-emerald-900/50 terminal-mode:border-emerald-600/30"
          >
            <Icon size={16} className={item.color} />
            <span className="text-sm font-semibold text-foreground light-mode:text-gray-900 terminal-mode:text-emerald-200">
              {item.value}
            </span>
            <span className="text-xs text-gray-400 light-mode:text-gray-600 terminal-mode:text-emerald-300">
              {item.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
