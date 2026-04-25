/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages / CDN deployment.
  // Remove `output` and restore the `i18n` block below for Vercel (supports SSR + i18n routing).
  output: 'export',
  trailingSlash: true,
  // Optional: set to '/repo-name' when deploying to GitHub Pages as a project page.
  // Leave empty for a custom domain or GitHub user/org pages root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
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
