const fs = require('fs');
const path = require('path');

// List your static paths and blog URLs here
const staticPaths = [ { path: '/', priority: 1.0 },  // Homepage
  // { path: '/about', priority: 0.7 },
  // { path: '/contact', priority: 0.6 },
]; // Static pages

// const blogPosts = [
// { path: '/blog/first-post', priority: 0.6 },
// { path: '/blog/second-post', priority: 0.6 }
  
// ];

const generateSitemap = () => {
  const baseUrl = 'https://www.eneya.es'; // Your website's base URL

  // Combine static and blog URLs
  const allPaths = [...staticPaths, /*...blogPosts */];

  // Generate the XML sitemap content
  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((route) => `
          <url>
            <loc>${baseUrl}${route.path}</loc>
            <changefreq>monthly</changefreq>
            <priority>${route.priority}</priority>
          </url>
        `)
        .join('')}
    </urlset>
  `;

  // Write the sitemap to the 'public' folder
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent.trim());

  console.log('✅ Sitemap generated at public/sitemap.xml');
};

// Run the script
generateSitemap();
