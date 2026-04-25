#!/usr/bin/env node
/**
 * Gera sitemap.xml a partir de posts.json.
 * Correr: node build-sitemap.js
 *
 * Quando adicionares ou actualizares um post em posts.json,
 * corre este script para regenerar o sitemap antes do commit.
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://blog.danielesfranca.pt';
const TODAY = new Date().toISOString().slice(0, 10);

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'posts.json'), 'utf8'));

const staticPages = [
  { loc: '/',           lastmod: TODAY, changefreq: 'weekly',  priority: '1.0' },
  { loc: '/categorias', lastmod: TODAY, changefreq: 'weekly',  priority: '0.7' },
  { loc: '/sobre',      lastmod: TODAY, changefreq: 'monthly', priority: '0.5' },
  { loc: '/contacto',   lastmod: TODAY, changefreq: 'monthly', priority: '0.5' }
];

const articles = data.posts
  .filter(p => p.status !== 'draft')
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(p => ({
    loc: '/artigo/' + p.slug,
    lastmod: p.date,
    changefreq: 'monthly',
    priority: '0.8'
  }));

const urls = [...staticPages, ...articles];

const body = urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/0.9">
${body}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);
console.log(`✓ sitemap.xml gerado · ${urls.length} URLs (${articles.length} artigos)`);
