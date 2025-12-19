import type { NextConfig } from 'next';

// const repo = 'next.js-1';

const nextConfig: NextConfig = {
    output: 'export',
    // basePath: process.env.PAGES_BASE_PATH,
    // assetPrefix: process.env.PAGES_BASE_PATH,
    basePath: '/next-01',
    assetPrefix: '/next-01',
    // distDir: '/next.js-1',
    trailingSlash: true,
};

export default nextConfig;
