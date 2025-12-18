import type { NextConfig } from 'next';

// const repo = 'next.js-1';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH,
    // distDir: '/next.js-1',
    trailingSlash: true,
};

export default nextConfig;
console.log('process.env.PAGES_BASE_PATH,', process.env.PAGES_BASE_PATH);
