import { posts } from '../data/posts';
const site = 'https://selfledexecutive.com';
const pages = ['/', '/what-is-ifs/', '/how-i-work/', '/outcomes/', '/ifs-glossary/', '/about/', '/journal/', '/contact/', '/privacy-policy/'];
const today = new Date().toISOString().slice(0, 10);
export function GET() {
  const urls = [
    ...pages.map((p) => ({ loc: site + p, lastmod: today })),
    ...posts.map((p: any) => ({ loc: site + p.url + (p.url.endsWith('/') ? '' : '/'), lastmod: String(p.updated || p.date).slice(0, 10) })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
