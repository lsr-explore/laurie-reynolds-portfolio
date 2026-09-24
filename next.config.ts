import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
