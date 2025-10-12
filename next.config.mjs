/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },

  // Base path for GitHub Pages - set to repo name for project pages
  // Remove or set to '' if deploying to https://balancesnap.github.io directly
  basePath: '/BalanceSnap-Website',

  // Explicitly set the workspace root to silence Next.js warning about multiple lockfiles
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
