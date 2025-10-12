/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages (will be your repo name)
  // Uncomment and set this to your repo name if deploying to a project page
  // basePath: '/your-repo-name',

  // Explicitly set the workspace root to silence Next.js warning about multiple lockfiles
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
