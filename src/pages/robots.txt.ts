// Open to crawlers unless PUBLIC_SITE_ENV=preview is set in Netlify.
export function GET() {
  const live = import.meta.env.PUBLIC_SITE_ENV !== 'preview';
  const body = live
    ? 'User-agent: *\nAllow: /\n\nSitemap: https://selfledexecutive.com/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
