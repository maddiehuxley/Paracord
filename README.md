# Paracord Center

The home for everything built under Paracord Commerce. Deployed at **paracord.center**.

## What this is

A LibreOffice-inspired landing for the Paracord product portfolio. Clean centered content panel, subtle orange dot texture in the page margins, slim right-side sponsorship rail. Built on Next.js 14, Vercel-hosted, fully static.

## Stack

- **Next.js 14** App Router, TypeScript strict
- **Tailwind CSS** for utility classes
- **Geist Sans + Geist Mono** (Vercel's font, via the `geist` package — local files, no Google Fonts dependency for the primary face)
- **DotGothic16** (Google Fonts, used for optional LED-style display treatments)
- **Zod** for content schema validation at build time

No CMS, no database, no auth in v2. Content lives in `content/` as JSON files.

## Adding a project

1. Copy `content/projects/_template/` to a new folder. Name it with your project slug (lowercase, hyphens).
2. Edit `project.json` inside.
3. (Optional) Drop a `cover.png` (or `.jpg`, `.svg`, `.webp`) next to `project.json` — it auto-syncs into `public/projects/{slug}/` during build.
4. Commit and push. Vercel rebuilds in ~30s.

Schema lives in `lib/types.ts`.

## Page layout

```
┌─────────────────────────────────────────────────┐
│                  page background                │
│             (subtle orange dot texture)         │
│                                                 │
│    ┌──────────────────────────────┐    ┌────┐   │
│    │            Header            │    │ Ad │   │
│    ├──────────────────────────────┤    │ rl │   │
│    │            Hero              │    │    │   │
│    │   copy + Paragram spotlight  │    │    │   │
│    ├──────────────────────────────┤    │    │   │
│    │   Projects · "One workshop"  │    │    │   │
│    ├──────────────────────────────┤    │    │   │
│    │   Why Choose Paracord (3)    │    │    │   │
│    ├──────────────────────────────┤    │    │   │
│    │   Built in the open          │    │    │   │
│    ├──────────────────────────────┤    │    │   │
│    │   What people are saying     │    │    │   │
│    ├──────────────────────────────┤    │    │   │
│    │   Meet the maker             │    │    │   │
│    ├──────────────────────────────┤    │    │   │
│    │            Footer            │    │    │   │
│    └──────────────────────────────┘    └────┘   │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Right-side ad rail

Slim fixed-position panel (140px wide) with three sponsorship slots. Hidden on screens narrower than 1280px. Each slot is a real link — point them at whatever you want (Stripe checkout, sponsorship form, sticker shop). Edit `components/ad-rail.tsx` to change copy or links.

## Logo variants in `/public`

- `logo.png` — full mark with the dot field background
- `logo-mark.png` — mark only, orange on white
- `logo-knockout.png` — full mark with white moats transparent
- `logo-mark-knockout.png` — mark only with white moats transparent (default in the UI)

The knockout variants adapt to any background — moats inherit the underlying color.

## Design rules

- No "it's not X, it's Y" constructions
- No `word — word` em-dash patterns
- Body weight is **500** minimum (no skinny letters)
- One accent color: orange (`#FF8C1A`)

## Local dev

```bash
npm install
npm run dev
```

## Deploy

GitHub repo → connected to Vercel. Framework preset: Next.js. No env vars required.

© 2026 Paracord Commerce s.r.o.
