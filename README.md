# Chappidi Venkata Narendra Babu — Portfolio

![OG image](public/og.jpg)

> Chappidi Venkata Narendra Babu — AI & Machine Learning student portfolio showcasing real-time projects, technical skills, verified certifications, and internship experiences. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack) + TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** framer-motion (with `MotionConfig reducedMotion="user"`)
- **Contact API:** Resend + Zod validation + in-memory rate limiting
- **Deployment:** Vercel

## Features

- **Sections** — Hero, About (education, certifications, interests), Projects (AI Case Study), Skills (verified categories), Contact, Footer
- **Contact API** (`POST /api/contact`) — Zod-validated, HTML-escaped emails via Resend, 5 req/min/IP sliding-window rate limit
- **Accessibility** — global `:focus-visible` outline, `aria-expanded` nav toggle, `role="status"` form feedback, `aria-hidden` decorative videos, reduced-motion support
- **SEO & Structured Data** — canonical + Open Graph + Twitter cards, `Person`/`WebSite` JSON-LD, `robots.ts`, `sitemap.ts`, branded manifest
- **Performance** — Optimized background video treatments, WebP posters, `preload="metadata"`, responsive mobile fallbacks

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run test       # Vitest unit tests
npm run build      # production build
```

## Environment variables

Copy `.env.example` to `.env.local` and configure your credentials:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for sending contact emails |
| `CONTACT_EMAIL` | Inbox that receives contact submissions (e.g. `23jr1a424@gmail.com`) |
| `RESEND_FROM` | Optional From address (defaults to `onboarding@resend.dev`) |

## Links

- [GitHub](https://github.com/Narendra-1715)
- [LinkedIn](https://www.linkedin.com/in/narendra-chappidi-986174418)
- [Resume (PDF)](/resume.pdf)
