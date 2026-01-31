'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/src/lib/store/theme';

interface GiscusCommentsProps {
  repoPath: string; // e.g., "owner/repo"
  discussionNumber?: number;
}

export const GiscusComments = ({ repoPath, discussionNumber }: GiscusCommentsProps) => {
  const theme = useThemeStore((state) => state.theme);

  // Map our theme names to Giscus theme names
  const giscusTheme = theme === 'light' ? 'light' : theme === 'terminal' ? 'dark' : 'dark';

  useEffect(() => {
    // Load Giscus script
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', repoPath);
    script.setAttribute('data-repo-id', ''); // Will be set by Giscus config
    script.setAttribute('data-category', 'Discussions');
    script.setAttribute('data-category-id', ''); // Will be set by Giscus config
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', giscusTheme);
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');

    const commentsContainer = document.getElementById(`giscus-container-${repoPath}`);
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    return () => {
      // Cleanup if needed
      const container = document.getElementById(`giscus-container-${repoPath}`);
      if (container) {
        const giscusFrame = container.querySelector('iframe.giscus-frame');
        if (giscusFrame) {
          container.removeChild(giscusFrame);
        }
      }
    };
  }, [repoPath, giscusTheme]);

  return (
    <div
      id={`giscus-container-${repoPath}`}
      className="giscus-container w-full mt-6"
      style={{ minHeight: '300px' }}
    />
  );
};
