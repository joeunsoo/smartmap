import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  // compress: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    OG_URL: process.env.OG_URL,
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json', '.mjs'],
  },
};

export default nextConfig;
