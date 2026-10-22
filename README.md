# markobodiroza.com

Version 7 of the personal site of Marko Bodiroza, AI Strategist and System Builder. Live at [markobodiroza.com](https://markobodiroza.com).

- **What the site is for:** [PRODUCT.md](PRODUCT.md) (audience, voice, principles)
- **How it looks:** [DESIGN.md](DESIGN.md) (colors, type, components, motion)

## Stack

- [Next.js 16](https://nextjs.org) with the Pages Router and React 19
- [Tailwind CSS 4](https://tailwindcss.com), with design tokens in `src/styles/tailwind.css`
- Google Sans Flex, self-hosted from `@fontsource-variable/google-sans-flex`
- [next-seo](https://github.com/garmeeh/next-seo) for meta tags and hand-written JSON-LD for schema
- Hosted on [Vercel](https://vercel.com)

## Getting Started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script                 | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Development server with hot reload        |
| `npm run build`        | Production build, then writes the sitemap |
| `npm start`            | Serves the production build               |
| `npm run lint`         | ESLint with the Next.js rules             |
| `npm test`             | Unit tests (Node's built-in test runner)  |
| `npm run format`       | Formats everything with Prettier          |
| `npm run format:check` | Checks formatting without changing files  |

## Editing Content

Most text lives in data files, not in the pages:

| File                   | Holds                                                                           |
| ---------------------- | ------------------------------------------------------------------------------- |
| `src/data/siteMeta.js` | Name, tagline, descriptions, profile links, booking and form URLs               |
| `src/data/content.js`  | Work history, services, process steps, tools, pricing and FAQ                   |
| `src/data/insights.js` | Insight summaries; each links to the full article on npws.net                   |
| `src/lib/seo.js`       | The Person schema used across the site, plus share image and breadcrumb helpers |

Adding an insight to `insights.js` creates its page, adds it to the sitemap and gives it a share image. Nothing else needs to change.

## Project Structure

```
src/
  pages/        One file per route; api/og.jsx renders share images
  components/   Header, Footer, buttons, contact form and page sections
  data/         Site content (see above)
  lib/          SEO helpers, contact links, formatting and scroll reveals
  styles/       Tailwind entry point and design tokens
  images/       Portrait and company logos
  assets/og/    Static font files for share images (OFL licensed)
scripts/
  sitemap.mjs   Writes public/sitemap.xml and robots.txt after each build
public/         Favicons and the web app manifest
```

## SEO

- **Meta tags:** every page sets its title, description, canonical URL and Open Graph tags with `NextSeo` from `src/components/Seo.jsx`. Site defaults are in `src/lib/next-seo.config.js`.
- **Structured data:** each page adds JSON-LD with `src/components/JsonLd.jsx`. Every inner page has a breadcrumb trail.
- **Share images:** `/api/og?title=…&desc=…` renders a 1200×630 image in the site's style. Its fonts are static copies of Google Sans Flex, because the renderer cannot read the variable web font.
- **Sitemap:** `scripts/sitemap.mjs` runs after `next build`. It lists each page by its canonical URL, skips noindex pages and gives articles their published date.

## Deployment

Pushing to `main` deploys to production on Vercel. Every other branch gets a preview deployment.

No environment variables are needed. The booking link and the Formspree form endpoint are in `src/data/siteMeta.js`.
