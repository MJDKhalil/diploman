/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages / CDN deployment.
  // Remove `output` and restore the `i18n` block below for Vercel (supports SSR + i18n routing).
  output: 'export',
  trailingSlash: true,
  // GitHub Pages project page lives at /diploman — set basePath accordingly.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/diploman',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/diploman',
  images: {
    // next/image optimization is not available in static export.
    unoptimized: true,
  },
  // i18n routing is incompatible with `output: 'export'`.
  // For Vercel deployment (SSR), remove `output` above and uncomment:
  // i18n: {
  //   locales: ['ar', 'en', 'fr'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // },
};

module.exports = nextConfig;
