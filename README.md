# Muhammad Shahid Mirza — Portfolio

A premium, animated personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Content is sourced from a real resume, GitHub, and Medium — not generic placeholder copy.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Webpack build — see note below)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`, class-based dark mode)
- **Animation:** Framer Motion, Lenis (smooth scroll), custom canvas particles
- **Icons:** lucide-react + hand-drawn brand icons (`icons/brand-icons.tsx`) for GitHub, LinkedIn, Kaggle, Medium, Substack, Credly
- **Forms:** react-hook-form, with a `/api/contact` route handler
- **Theming:** next-themes (light / dark / system)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important: Turbopack is disabled on this machine

This project's `dev`/`build` scripts pass `--webpack` instead of using Next 16's default Turbopack. That's because Windows Application Control (WDAC) policies on this machine block the native `@next/swc` binary, and Turbopack requires native bindings (WASM fallback isn't supported). If you're on a machine without that restriction, you can safely switch back:

```json
"dev": "next dev",
"build": "next build"
```

## Project Structure

```
app/            Routes, layout, metadata, SEO files (sitemap, robots, icons, OG images)
sections/       One component per page section (hero, about, experience, ...)
layouts/        Navbar, Footer
components/ui/  Reusable primitives (Button, GlowCard, Reveal, Counter, Icon, ...)
components/effects/  Aurora background, canvas particles
components/providers/  Theme + smooth-scroll providers
components/shared/     Theme toggle
data/           All content — personal info, experience, education, skills, projects, etc.
icons/          Hand-built brand SVG icons not covered by lucide-react
lib/            cn() helper, icon name → component map
hooks/          useMounted (hydration-safe mount detection)
types/          Shared TypeScript interfaces for the data layer
```

## Editing Content

All real content lives in `data/*.ts`, typed against `types/index.ts`. To update anything — bio, jobs, skills, projects — edit the relevant data file; no component changes needed.

Known placeholders (intentionally marked in the UI, safe to replace):
- **Hero portrait** — a monogram card stands in for a real photo.
- **Project/gallery screenshots** — gradient + icon tiles stand in for real images.
- **Testimonials** — three clearly-labeled placeholder cards awaiting real quotes.

## Contact Form

`app/api/contact/route.ts` validates submissions and logs them server-side. No email provider is wired up yet — plug in [Resend](https://resend.com), Nodemailer + SMTP, or a forms service, keyed off environment variables, to actually deliver messages.

## Deployment

Ready for Vercel: `vercel deploy`. Update the `siteUrl` constant in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` to your real production domain before deploying.
