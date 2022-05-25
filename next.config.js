const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/jabrah-portfolio' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
