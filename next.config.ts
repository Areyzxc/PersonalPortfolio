import type { NextConfig } from "next";

// Environment-aware configuration for multi-platform deployment
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig: NextConfig = {
  // GitHub Pages requires static export; Vercel/Netlify do not
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/PersonalPortfolio',
    images: { unoptimized: true },
  }),

  /* Image optimization (for Vercel/Netlify) */
  ...(!isGitHubPages && {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  }),

  /* Enable SWR caching */
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  /* Compress responses */
  compress: true,
  /* Disable production source maps for optimal bundle size */
  productionBrowserSourceMaps: false,
};

export default nextConfig;
