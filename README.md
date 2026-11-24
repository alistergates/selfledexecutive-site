# selfledexecutive.com

IFS-informed leadership coaching site for Alister Gates. Built with [Astro](https://astro.build), hosted on Netlify. Sister site to alistergates.com.

- `src/pages/`: pages (home, approach, work-with-me, about, contact, privacy-policy)
- `src/pages/journal/*.md`: journal articles. Add a new `.md` file with the same frontmatter to publish. `draft: true` hides one.
- `src/data/site.js`: navigation, footer, email, and the Google Analytics ID (empty until a GA4 property exists; the cookie banner only appears once it's set)
- Forms: `contact` and `field-notes` (email sign-ups) are Netlify Forms. Submissions appear under Forms in Netlify.

## Dev site protection

- `PUBLIC_SITE_ENV=preview` in Netlify adds `noindex` everywhere and blocks crawlers.
- `SITE_PASSWORD` in Netlify turns on a password gate (any username).

## Local development

```bash
npm install
npm run dev
```
