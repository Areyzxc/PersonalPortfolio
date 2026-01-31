/**
 * Helper function to get the correct asset path for GitHub Pages
 * Adds basePath prefix when needed
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (basePath && !path.startsWith(basePath)) {
    return `${basePath}${path}`;
  }
  return path;
}
