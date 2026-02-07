'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/src/lib/store/theme';

interface GiscusCommentsProps {
  repoPath: string; // e.g., "owner/repo"
  discussionNumber?: number;
}

export const GiscusComments = ({ repoPath, discussionNumber }: GiscusCommentsProps) => {
  const theme = useThemeStore((state) => state.theme);
  const [hasError, setHasError] = useState(false);

  // Map our theme names to Giscus theme names
  const giscusTheme = theme === 'light' ? 'light' : theme === 'terminal' ? 'dark' : 'dark';

  useEffect(() => {
    // ✅ Set up error handler for giscus errors
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return;
      // Handle giscus error responses
      if (event.data?.type === 'GISCUS_ERROR' || event.data?.error) {
        setHasError(true);
      }
    };

    window.addEventListener('message', handleMessage);

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

    // ✅ Handle script errors
    script.onerror = () => {
      setHasError(true);
    };

    const commentsContainer = document.getElementById(`giscus-container-${repoPath}`);
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
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

  // ✅ Show fallback message if giscus has error
  if (hasError) {
    return (
      <div className="w-full mt-6 p-6 rounded-lg border border-accent/20 bg-secondary/30">
        <p className="text-gray-400 text-center">
          Comments are not available for this repository.{' '}
          <a
            href={`https://github.com/${repoPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light transition-colors ml-2"
          >
            View on GitHub →
          </a>
        </p>
      </div>
    );
  }

  return (
    <div
      id={`giscus-container-${repoPath}`}
      className="giscus-container w-full mt-6"
      style={{ minHeight: '300px' }}
    />
  );
};
