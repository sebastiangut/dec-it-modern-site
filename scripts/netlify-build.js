#!/usr/bin/env node

/**
 * Netlify Build Script for DEC-IT Website
 * This script optimizes the build process for Netlify deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Netlify build process for DEC-IT website...');

// Set environment variables for build
process.env.NODE_ENV = 'production';
process.env.NEXT_TELEMETRY_DISABLED = '1';

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }
  if (fs.existsSync('out')) {
    execSync('rm -rf out', { stdio: 'inherit' });
  }

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm ci --only=production', { stdio: 'inherit' });

  // Type check
  console.log('🔍 Running type check...');
  execSync('npm run type-check', { stdio: 'inherit' });

  // Build the application
  console.log('🏗️ Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Generate sitemap
  console.log('🗺️ Generating sitemap...');
  try {
    execSync('npm run generate-sitemap', { stdio: 'inherit' });
  } catch (error) {
    console.warn('⚠️ Sitemap generation failed, continuing...');
  }

  // Verify build output
  console.log('✅ Verifying build output...');
  if (!fs.existsSync('out')) {
    throw new Error('Build output directory "out" not found');
  }

  const indexPath = path.join('out', 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('index.html not found in build output');
  }

  // Create _redirects file for Netlify (backup to netlify.toml)
  console.log('🔄 Creating Netlify redirects...');
  const redirectsContent = `
# Netlify redirects for DEC-IT website
/*    /index.html   200

# Romanian language redirects
/en/*  /:splat  301

# SEO redirects
/dec-it  /  301
/decit   /  301

# Legal pages
/privacy  /legal/confidentialitate  301
/terms    /legal/termeni  301
/cookies  /legal/cookies  301

# Solutions
/access-control      /solutii/control-acces  301
/video-surveillance  /solutii/supraveghere-video  301
/ticketing          /solutii/ticketing  301

# Industries
/hotels      /industrii/hoteluri  301
/healthcare  /industrii/sanatate  301
/events      /industrii/evenimente  301
`;

  fs.writeFileSync(path.join('out', '_redirects'), redirectsContent.trim());

  // Create robots.txt
  console.log('🤖 Creating robots.txt...');
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://dec-it.eu/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /_next/
Disallow: /api/

# Allow all content for SEO
Allow: /solutii/
Allow: /industrii/
Allow: /legal/
Allow: /despre/
Allow: /contact/
`;

  fs.writeFileSync(path.join('out', 'robots.txt'), robotsContent.trim());

  // Build summary
  console.log('📊 Build Summary:');
  const outDir = 'out';
  const files = getAllFiles(outDir);
  console.log(`   📁 Total files: ${files.length}`);
  console.log(`   📄 HTML files: ${files.filter(f => f.endsWith('.html')).length}`);
  console.log(`   🎨 CSS files: ${files.filter(f => f.endsWith('.css')).length}`);
  console.log(`   📜 JS files: ${files.filter(f => f.endsWith('.js')).length}`);

  console.log('✅ Netlify build completed successfully!');
  console.log('🌐 Ready for deployment to Netlify');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function getAllFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getAllFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}
