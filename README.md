# Illustre Tech House — Official Website

> **Engineering What's Next.**
> The official website of Illustre Tech House, a boutique IT consulting firm based in Kigali, Rwanda.

---

## Overview

This repository contains the full source code for the Illustre Tech House marketing and portfolio website. It is a statically generated, multi-page site built with **Next.js 16 App Router**, **Tailwind CSS 4**, and a fully custom design system featuring light/dark theme switching, CSS-based scroll-reveal animations, and a canvas particle mesh hero.

The site is structured as five distinct route pages plus shared layout infrastructure, all written in TypeScript and deployable as a fully static export or via any Node.js host.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, service preview, "Our Edge" section, work strip, CTA band |
| `/services` | Full six-service breakdown with sub-services, stack, and engagement model |
| `/work` | Portfolio — filterable case study grid by sector |
| `/about` | Firm story, mission, values, founder bio, tech stack |
| `/contact` | Contact form with validation + Calendly discovery call link |

---

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS 4 | 4.x |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | 1.x |
| Forms | React Hook Form | 7.x |
| Runtime | React | 19.2.4 |
| Node | ≥ 18.x | — |

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout — ThemeProvider, Navbar, Footer, SEO metadata, JSON-LD
│   ├── globals.css         # Tailwind 4 @theme tokens, CSS custom properties, keyframes, utilities
│   ├── page.tsx            # Home page
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts          # Auto-generated /sitemap.xml
│   └── robots.ts           # Auto-generated /robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav, scroll-aware blur, mobile drawer, ThemeToggle
│   │   └── Footer.tsx      # Three-column footer — brand / nav / contact
│   │
│   ├── ui/
│   │   ├── Button.tsx      # primary / secondary / outline / ghost variants, sm/md/lg sizes
│   │   ├── Badge.tsx       # brand / kigali / ash / outline colour variants
│   │   ├── Card.tsx        # Base hover-lift card shell
│   │   ├── HoverCard.tsx   # CSS-only hover border + shadow
│   │   ├── SectionLabel.tsx # Brand mono uppercase eyebrow text
│   │   ├── SocialIcons.tsx # Inline SVG LinkedIn + GitHub (not in lucide-react v1)
│   │   ├── ThemeProvider.tsx # Context + localStorage + prefers-color-scheme
│   │   ├── ThemeToggle.tsx  # Animated sun/moon icon button
│   │   └── ScrollReveal.tsx # IntersectionObserver wrapper — up / left / scale directions
│   │
│   ├── sections/           # Home-page sections (Hero, ServicesGrid, WhyUs, WorkStrip, CTABand)
│   └── pages/              # Page-specific components (ServiceCard, CaseStudyCard, ContactForm)
│
├── lib/
│   └── constants.ts        # All site data — SERVICES, CASE_STUDIES, NAV_LINKS, etc.
│
└── public/
    └── favicon.svg         # ITH geometric monogram mark
```

---

## Design System

### Brand Colours

| Token | Hex | Usage |
|---|---|---|
| `--color-brand` | `#03a9f4` | CTAs, highlights, active states, links |
| `--color-brand-dark` | `#0288d1` | Hover states |
| `--color-brand-light` | `#b3e5fc` | Tints, icon fills |
| `--color-kigali` | `#00C896` | Success, positive indicators |
| `--color-obsidian` | `#0D1117` | Dark page background |
| `--color-slate-dark` | `#1E2432` | Dark card surfaces |
| `--color-slate-border` | `#2A2F3F` | Dark borders and dividers |
| `--color-ivory` | `#F4F4F5` | Body text on dark |
| `--color-ash` | `#8B8FA8` | Muted text, subtext, labels |

### Light / Dark Theme

The theme system is driven by CSS custom properties on `:root` and `:root[data-theme="light"]`. A no-flash inline script reads `localStorage` before first paint and sets `data-theme` on `<html>`. The `ThemeProvider` client component owns the React context and persists the user's choice.

```
Dark (default)            Light
─────────────────         ─────────────────
--bg-page    #0D1117      --bg-page    #F0F4F8
--bg-card    #1E2432      --bg-card    #FFFFFF
--border     #2A2F3F      --border     #CBD5E1
--text-primary #F4F4F5   --text-primary #0D1117
--text-muted #8B8FA8      --text-muted #64748B
```

### Typography

| Role | Family | Weight |
|---|---|---|
| Headings & body | Inter | 400 / 500 / 600 / 700 / 800 |
| Code & labels | JetBrains Mono | 400 / 500 |

Both fonts are loaded from Google Fonts via `@import` in `globals.css`.

### Animations

| Class / Keyframe | Behaviour |
|---|---|
| `.reveal` | Fade + slide up on intersection (IntersectionObserver) |
| `.reveal-left` | Fade + slide in from left |
| `.reveal-scale` | Fade + scale up from 92% |
| `.delay-{100..500}` | Stagger helpers for sibling reveals |
| `.float-y` | Continuous vertical float (decorative blobs) |
| `.glow-brand` | Pulsing brand-colour box-shadow on hover |
| `.shimmer` | Left-to-right shimmer stripe |
| `.geo-grid` | CSS background-image geometric grid |
| `.text-gradient` | Brand linear-gradient clipped to text |

---

## Getting Started

### Prerequisites

- Node.js **18.x or later**
- npm 9+ (or pnpm / yarn)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server uses Turbopack and hot-reloads on file save.

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Environment & Configuration

No `.env` file is required to run the site locally. The following values are hardcoded in `lib/constants.ts` and `app/layout.tsx` and should be updated before production deployment:

| Value | Location | Default |
|---|---|---|
| Site URL | `app/layout.tsx` → `metadataBase` | `https://illustretech.rw` |
| Contact email | `lib/constants.ts`, `components/pages/ContactForm.tsx` | `hello@illustretech.rw` |
| Calendly link | `app/contact/page.tsx` | `https://calendly.com/illustretech` |
| LinkedIn URL | `components/layout/Footer.tsx` | placeholder |
| GitHub URL | `components/layout/Footer.tsx` | placeholder |
| OG image | `public/og-image.png` | not yet generated |

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

No additional configuration is needed. Next.js 16 with the App Router is fully supported on Vercel's Edge and Node.js runtimes.

### Other hosts (static export)

Add the following to `next.config.ts` to generate a fully static export:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Then run:

```bash
npm run build
# Output is in ./out/
```

Upload the `out/` directory to any static host (Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

### Docker

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

> Enable standalone output in `next.config.ts`: `output: "standalone"`

---

## SEO

- Per-page `Metadata` export with `title`, `description`, `openGraph`, and `twitter` fields
- Root layout sets `metadataBase`, title template (`%s | Illustre Tech House`), and robots directives
- JSON-LD `LocalBusiness` structured data (Kigali, Rwanda) injected in `<head>`
- `/sitemap.xml` auto-generated via `app/sitemap.ts`
- `/robots.txt` auto-generated via `app/robots.ts`
- SVG favicon (`public/favicon.svg`) — ITH geometric monogram

---

## Adding Content

### Add a new service

Edit `lib/constants.ts` → `SERVICES` array. Each entry accepts:

```ts
{
  id: string          // anchor ID for deep-linking
  icon: string        // lucide-react icon name (Code2, Brain, Layers, Server, BarChart3, GraduationCap)
  title: string
  description: string
  subServices: string[]
  stack: string[]
  idealFor: string
}
```

### Add a case study

Edit `lib/constants.ts` → `CASE_STUDIES` array:

```ts
{
  id: string
  sector: "NGO" | "SME" | "Government" | "Education"
  tag: string         // short label shown in the card header
  title: string
  client: string
  problem: string
  solution: string
  result: string      // bold outcome shown in the key result block
  stack: string[]
  featured: boolean   // true = shown in the Home work strip
}
```

---

## Git History

The repository follows conventional commits with one commit per logical layer:

```
06189e0  chore(assets):        public SVG assets and favicon
0ef4747  feat(pages):          Services, Work, About, Contact pages + page components
ff8a2b5  feat(home):           Home page — Hero, ServicesGrid, WhyUs, WorkStrip, CTABand
eea4379  feat(layout):         data constants, root layout, Navbar, Footer, sitemap, robots
0183951  feat(design-system):  brand tokens, light/dark theme, UI primitives, ScrollReveal
a9243dc  chore:                Next.js 16 project scaffold
```

---

<!-- ## Roadmap

- [ ] Replace placeholder OG image (`public/og-image.png`) with actual branded image
- [ ] Connect contact form to a real email delivery service (Resend, Formspree, or SendGrid)
- [ ] Wire Calendly embed directly into the contact page
- [ ] Add real founder photo to `/about` (replace `BN` avatar monogram)
- [ ] Add real client logos to Home hero sector strip
- [ ] Expand case studies with full write-up pages at `/work/[id]`
- [ ] Add Framer Motion page transition wrapper
- [ ] Lighthouse audit pass — target 90+ across all metrics -->

---

<!-- ## License

All rights reserved. This codebase is proprietary to **Illustre Tech House**.
No part of this repository may be reproduced, distributed, or used without explicit written permission from the firm.

--- -->

*Illustre Tech House · Kigali, Rwanda · info@illustretech.rw*
