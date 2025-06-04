const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://dec-it.eu';

const staticPages = [
  '',
  '/despre',
  '/contact',
  '/solutii',
  '/solutii/control-acces',
  '/solutii/supraveghere-video',
  '/solutii/ticketing',
  '/solutii/hotel-management',
  '/solutii/spitale',
  '/solutii/flux-clienti',
  '/solutii/vanzari-mobile',
  '/solutii/casino',
  '/industrii',
  '/industrii/hoteluri',
  '/industrii/sanatate',
  '/industrii/evenimente',
  '/industrii/sport',
  '/industrii/business',
  '/legal/termeni',
  '/legal/confidentialitate',
  '/legal/cookies',
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map((page) => {
    return `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
