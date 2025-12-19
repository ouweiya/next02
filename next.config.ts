import type { NextConfig } from 'next';

// const repo = 'next.js-1';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH,
    assetPrefix: process.env.PAGES_BASE_PATH,
    // distDir: '/next.js-1',
    // trailingSlash: true,
};

export default nextConfig;
