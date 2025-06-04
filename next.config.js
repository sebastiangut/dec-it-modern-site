/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['dec-it.eu'],
  },

  // Trailing slash for better static hosting
  trailingSlash: true,

  // Disable server-side features for static export
  // Note: headers are handled by netlify.toml for static export

  // Optimize for static export
  distDir: '.next',

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://dec-it.eu',
    NEXT_TELEMETRY_DISABLED: '1',
  },
}

module.exports = nextConfig
