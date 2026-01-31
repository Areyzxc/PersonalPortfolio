import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages base path */
  basePath: '/PersonalPortfolio',
  
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  /* Enable SWR caching */
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  /* Compress responses */
  compress: true,
  /* Enable production source maps for error tracking */
  productionBrowserSourceMaps: false,
};

export default nextConfig;
