# Illustre Tech House — Official Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat-square&logo=framer)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)

**Engineering What's Next.**

Production website for [Illustre Tech House](https://illustretech.rw) — a boutique IT consulting firm delivering precision software, AI systems, and digital infrastructure for African institutions.

[Live Site](https://illustretech.rw) · [Report a Bug](mailto:illustre.tech.house@gmail.com) · [Contact the Firm](https://illustretech.rw/contact)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [SEO & Metadata](#seo--metadata)
- [Content Management](#content-management)
- [Environment & Configuration](#environment--configuration)

---

## Overview

This repository is the complete source for the Illustre Tech House marketing and portfolio website. It is a **statically exported, fully type-safe multi-page site** with the following capabilities:

- **Light / Dark theme** — CSS custom properties with zero-flash `localStorage` persistence
- **Framer Motion animations** — scroll-reveal, stagger, parallax, and page transitions
- **Static export** — deploys to any host (cPanel, Netlify, Cloudflare Pages, S3) with no server required
- **Blog & Work detail pages** — static generation via `generateStaticParams`
- **SEO-ready** — per-page metadata, Open Graph, JSON-LD structured data, sitemap, robots.txt
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, `:focus-visible` styles

### Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services preview, stats, comparison, work strip, testimonials, blog preview, CTA |
| `/services` | Six-service breakdown with sub-services, tech stack, and 3-step engagement model |
| `/work` | Filterable case study grid by sector with detail pages |
| `/blog` | Blog listing with category filter and individual post pages |
| `/about` | Firm story, mission, values, team profiles, tech stack |
| `/contact` | Contact form + Calendly discovery call booking |

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | latest |
| Runtime | React | 19.2.x |
| Node.js | Minimum supported | ≥ 18.x |

---

## Project Structure

```
ith-portfolio/
├── app/
│   ├── layout.tsx                  # Root layout — ThemeProvider, Navbar, Footer, JSON-LD
│   ├── globals.css                 # @theme tokens, CSS vars, keyframes, utility classes
│   ├── page.tsx                    # Home page
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/page.tsx         # Individual post (generateStaticParams)
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── work/
│   │   ├── page.tsx                # Case study grid
│   │   └── [id]/page.tsx           # Case study detail (generateStaticParams)
│   ├── sitemap.ts                  # Auto-generates /sitemap.xml
│   └── robots.ts                   # Auto-generates /robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav, scroll blur, mobile drawer, ThemeToggle
│   │   └── Footer.tsx              # 4-column footer — brand / services / company / contact
│   │
│   ├── ui/                         # Reusable primitives
│   │   ├── Button.tsx              # primary / secondary / outline / ghost — sm/md/lg
│   │   ├── Badge.tsx               # Colour variants: brand / kigali / ash / outline
│   │   ├── Card.tsx                # Base card shell
│   │   ├── HoverCard.tsx           # CSS hover-lift card
│   │   ├── SectionLabel.tsx        # Mono uppercase eyebrow label
│   │   ├── SocialIcons.tsx         # Inline SVG: LinkedIn, GitHub
│   │   ├── ThemeProvider.tsx       # Context + localStorage + prefers-color-scheme
│   │   ├── ThemeToggle.tsx         # Animated sun/moon toggle button
│   │   ├── MotionReveal.tsx        # Framer Motion scroll-reveal (up/left/scale/fade)
│   │   ├── AnimatedCounter.tsx     # Spring-animated number counter
│   │   └── ParallaxWrapper.tsx     # Scroll-driven Y-axis parallax
│   │
│   ├── sections/                   # Page section components
│   │   ├── Hero.tsx                # Full-bleed hero with Unsplash bg + character stagger
│   │   ├── TrustedBy.tsx           # Marquee logo strip
│   │   ├── ServicesGrid.tsx        # Service preview cards
│   │   ├── StatsCounter.tsx        # Animated horizontal stat band
│   │   ├── WhyUs.tsx               # Comparison table with split image
│   │   ├── WorkStrip.tsx           # Featured case study cards
│   │   ├── Testimonials.tsx        # Testimonial cards over photo background
│   │   ├── BlogPreview.tsx         # Latest blog post cards
│   │   └── CTABand.tsx             # 2-column CTA with preview illustration
│   │
│   └── pages/                      # Page-specific components
│       ├── ServiceCard.tsx
│       ├── CaseStudyCard.tsx
│       ├── BlogCard.tsx
│       └── ContactForm.tsx
│
├── lib/
│   ├── constants.ts                # All site data — SERVICES, CASE_STUDIES, TEAM, etc.
│   └── blog.ts                     # Blog post data and helper functions
│
└── public/
    ├── favicon.svg                 # ITH geometric monogram
    ├── logo_plain.svg              # Full wordmark (used in footer)
    ├── Official_Logo.svg           # Primary brand logo
    ├── Preview.svg                 # UI preview illustration (used in CTABand)
    ├── Hand-Drawn Ink Brush Strokes.svg  # Chalk underline accent
    └── logos/                      # Trusted organisation logos
```

---

## Design System

### Brand Colours

| Token | Value | Usage |
|---|---|---|
| `--color-brand` | `#03a9f4` | Primary CTAs, active states, links, highlights |
| `--color-brand-dark` | `#0288d1` | Hover states on brand elements |
| `--color-brand-light` | `#b3e5fc` | Tints, subtle fills |
| `--color-kigali` | `#00C896` | Success indicators, positive outcomes |
| `--color-obsidian` | `#0D1117` | Dark base background |
| `--color-ivory` | `#F4F4F5` | Body text on dark surfaces |
| `--color-ash` | `#8B8FA8` | Muted text, labels, secondary info |

### Theme System

Driven by CSS custom properties on `:root` (dark default) and `:root[data-theme="light"]`. A no-flash inline script in `app/layout.tsx` reads `localStorage` before first paint.

```
Dark (default)                    Light
──────────────────────────        ──────────────────────────
--bg-page        #0D1117          --bg-page        #F0F4F8
--bg-section-alt #161B22          --bg-section-alt #FFFFFF
--bg-raised      #1E2432          --bg-raised      #E4EAF2
--bg-card        #1E2432          --bg-card        #FFFFFF
--border         #2A2F3F          --border         #CBD5E1
--text-primary   #F4F4F5          --text-primary   #0D1117
--text-muted     #8B8FA8          --text-muted     #64748B
--bg-inverted    #F0F4F8          --bg-inverted    #0D1117
```

### Typography

| Role | Family | Weights |
|---|---|---|
| Headings & body | Inter | 400, 500, 600, 700, 800 |
| Monospaced labels & code | JetBrains Mono | 400, 500 |

### Utility Classes

| Class | Effect |
|---|---|
| `.chalk` | Hand-drawn brush stroke underline accent (SVG `::after`) |
| `.text-gradient` | Brand linear-gradient clipped to text |
| `.geo-grid` | CSS geometric grid background pattern |
| `.glow-brand` | Pulsing brand box-shadow on hover |
| `.timeline-card` | Hover-lift card with brand border on focus |
| `.hover-card` | CSS-only lift + shadow on hover |
| `.section-py` / `.section-py-lg` | Consistent vertical section rhythm |
| `.wrap` | Max-width container with responsive gutters |

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9+ (or pnpm / yarn)

### Install

```bash
git clone https://github.com/illustre-tech-house/ith-portfolio.git
cd ith-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). Uses Turbopack for fast hot reload.

### Production Build

```bash
npm run build
```

Output is written to `./out/` (static export). Upload the contents of `out/` to your host's `public_html/`.

### Lint

```bash
npm run lint
```

---

## Deployment

### Static Export (cPanel, shared hosting)

The project is configured for static export (`output: "export"` in `next.config.ts`). After building:

```bash
npm run build
# ./out/ contains the full static site
```

Upload the contents of `out/` to `public_html/` on your cPanel host. No Node.js server required.

> **Note:** `next/image` runs with `unoptimized: true` in static export mode. Images load at source resolution — adjust Unsplash `?w=` query params to control size.

### Vercel

```bash
npm i -g vercel
vercel
```

Remove `output: "export"` and `images.unoptimized: true` from `next.config.ts` to re-enable Vercel's image optimisation pipeline.

### Cloudflare Pages / Netlify

Push to a connected Git repository. Set build command to `npm run build` and publish directory to `out`.

### Docker (Node.js server)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

> Switch `next.config.ts` to `output: "standalone"` for Docker deployments.

---

## SEO & Metadata

- Per-page `Metadata` export (`title`, `description`, `openGraph`, `twitter`)
- Root layout sets `metadataBase`, title template `%s | Illustre Tech House`, and robots directives
- JSON-LD `LocalBusiness` structured data injected in `<head>`
- `/sitemap.xml` — auto-generated via `app/sitemap.ts` (includes blog and work detail URLs)
- `/robots.txt` — auto-generated via `app/robots.ts`
- SVG favicon — ITH geometric monogram (`public/favicon.svg`)

---

## Content Management

All site content lives in `lib/constants.ts` and `lib/blog.ts`. No CMS or database required.

### Add a Service

Edit `SERVICES` in `lib/constants.ts`:

```ts
{
  id: string          // anchor ID for deep-linking e.g. "software-dev"
  icon: LucideIcon    // lucide-react component
  title: string
  description: string
  subServices: string[]
  stack: string[]
  idealFor: string
  image: string       // Unsplash URL for card header
}
```

### Add a Case Study

Edit `CASE_STUDIES` in `lib/constants.ts`:

```ts
{
  id: string
  sector: "NGO" | "SME" | "Government" | "Education"
  tag: string
  title: string
  client: string
  problem: string
  solution: string
  result: string
  stack: string[]
  featured: boolean   // true = shown in the home work strip
  thumbnail?: string  // Unsplash URL for card image
}
```

### Add a Blog Post

Edit `BLOG_POSTS` in `lib/blog.ts`:

```ts
{
  slug: string        // URL-safe identifier e.g. "my-post-title"
  title: string
  excerpt: string
  category: "Engineering" | "AI & Data" | "Cloud" | "Strategy"
  date: string        // ISO date e.g. "2025-06-01"
  readTime: number    // minutes
  coverImage: string  // Unsplash URL
  content: string     // Markdown string (h2, h3, bold, italic, lists, code)
}
```

### Add a Team Member

Edit `TEAM` in `lib/constants.ts`:

```ts
{
  initials: string
  name: string
  role: string
  bio: string
  linkedin: string
  skills: string[]
  photo?: string      // path to /public image, or omit for initials avatar
}
```

---

## Environment & Configuration

No `.env` file is required to run locally. Update these values before going to production:

| Value | File | Default |
|---|---|---|
| Site URL | `app/layout.tsx` → `metadataBase` | `https://illustretech.rw` |
| Contact email | `lib/constants.ts`, `ContactForm.tsx` | `illustre.tech.house@gmail.com` |
| Calendly link | `app/contact/page.tsx` | set to live Calendly URL |
| LinkedIn URL | `components/layout/Footer.tsx` | company LinkedIn page |
| GitHub URL | `components/layout/Footer.tsx` | company GitHub org |
| OG image | `public/og-image.png` | generate at 1200×630px |

---

## License

All rights reserved. This codebase is proprietary to **Illustre Tech House**.  
No part of this repository may be reproduced, distributed, or used without explicit written permission from the firm.

---

<div align="center">

**Illustre Tech House** · Kigali, Rwanda  
[illustretech.rw](https://illustretech.rw) · [info@illustretech.rw](mailto:info@illustretech.rw)

*Precision engineering for institutions that demand quality.*

</div>
