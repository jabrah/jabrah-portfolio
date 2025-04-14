const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Had a problem in GH Pages with the static export links pointing to the wrong place.
   * Adding the basePath fixed this
   * 
   * The path should simply be the repo name
   * 
   * https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
   */
  // basePath: isProd ? '/jabrah-portfolio' : '', // Used for default GH Page URL (jabrah.github.io/jabrah-portfolio)
  basePath: '',
  // eslint: { ignoreDuringBuilds: true },
  output: 'export',
  reactStrictMode: true,
};

module.exports = nextConfig;
