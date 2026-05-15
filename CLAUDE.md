# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

Package manager is **pnpm** — do not use npm or yarn.

## Architecture

**89 Factory** is a Next.js 16 (App Router) restaurant website for a Marseille food truck.

### Page composition

The homepage ([app/page.tsx](app/page.tsx)) is a single-page layout: it composes full-page sections (`<HeroSection>`, `<MenuSection>`, `<LocationSection>`, `<ContactSection>`) each with matching `id` attributes used for hash-based smooth scroll navigation from the header.

JSON-LD structured data (Restaurant + Menu schema) is injected in `<script type="application/ld+json">` inside `page.tsx` via helpers in [lib/structured-data.ts](lib/structured-data.ts).

### Client-side interactivity

Interactive components use `"use client"`:
- [components/header.tsx](components/header.tsx) — fixed nav with Intersection Observer to track the active section, `window.history.replaceState` for hash URL updates, and mobile hamburger state.
- [components/menu-section.tsx](components/menu-section.tsx) — tab-based menu navigation.
- [components/menu-category.tsx](components/menu-category.tsx) — renders menu item cards per category.
- [components/burger-3d.tsx](components/burger-3d.tsx) — Three.js 3D burger via `@react-three/fiber` and `@react-three/drei`.

### Styling

Tailwind CSS 4 with `@tailwindcss/postcss`. Design tokens are CSS custom properties defined in [app/globals.css](app/globals.css) using `oklch()` color space:
- Primary: golden yellow (`--primary`)
- Accent: orange (`--accent`)
- Dark backgrounds throughout (dark-mode-first)

Use the `cn()` utility from [lib/utils.ts](lib/utils.ts) (`clsx` + `tailwind-merge`) for conditional className composition.

### UI components

shadcn/ui (New York style, Lucide icons) + Radix UI primitives. Component config is in [components.json](components.json). Icons come from `iconoir-react`.

### SEO

- Metadata (Open Graph, Twitter card) in [app/layout.tsx](app/layout.tsx)
- Canonical domain: `https://foodiewagon.de`
- Sitemap and robots.txt in [public/](public/) — robots.txt explicitly allows AI crawlers
- French locale (`fr_FR`)

### Legal pages

Standalone routes under [app/mentions-legales/](app/mentions-legales/), [app/politique-de-confidentialite/](app/politique-de-confidentialite/), and [app/cgu/](app/cgu/) for RGPD compliance.

## Path aliases

`@/*` resolves to the project root (defined in [tsconfig.json](tsconfig.json)).
