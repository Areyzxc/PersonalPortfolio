import { useState, useEffect } from 'react';

export interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  language?: string;
  updated?: string;
  loading: boolean;
  error?: string;
}

export const useGitHubStats = (repoPath: string | undefined): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    watchers: 0,
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    if (!repoPath) {
      setStats((prev) => ({ ...prev, loading: false, error: 'No repo path provided' }));
      return;
    }

    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            // Optionally add GitHub token for higher rate limits:
            // 'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        setStats({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          watchers: data.watchers_count || 0,
          language: data.language || undefined,
          updated: data.updated_at || undefined,
          loading: false,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch stats',
        }));
      }
    };

    fetchGitHubStats();
  }, [repoPath]);

  return stats;
};
