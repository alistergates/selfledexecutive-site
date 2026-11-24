// Journal posts: every .md file in src/pages/journal, newest first.
const files = import.meta.glob('../pages/journal/*.md', { eager: true }) as Record<string, any>;
export const posts = Object.values(files)
  .map((f) => ({ ...f.frontmatter, url: f.url }))
  .filter((p) => !p.draft)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));
export const fmtDate = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
