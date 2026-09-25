import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep pages and public files (including resumes) out of search results until launch.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // The work index moved to the home page (#work). Temporary (307) for now.
      { source: '/work', destination: '/#work', permanent: false },
    ];
  },
};

export default nextConfig;
