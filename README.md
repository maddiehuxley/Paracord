# Paracord Center

The workshop index for everything built under Paracord Commerce. Deployed at **paracord.center**.

```
[||] PARACORD
    CENTER
```

## What this is

A single static landing page that lists every Paracord project, with category tabs (Software / Hardware / Web apps) and a featured-project highlight. Mostly white, orange details, dotted backgrounds, workshop typography (Workbench + IBM Plex Mono). Dark mode inverts white and black, keeps the orange.

No analytics, no tracking, no cookies, no popups. The site is fully static and ships from Vercel's edge.

## Stack

- **Next.js 14** App Router, TypeScript strict
- **Tailwind CSS** for utility classes
- **next-themes** for the invert-everything dark mode
- **Zod** for content schema validation at build time
- **Google Fonts** (Workbench, IBM Plex Mono), loaded via `next/font`

No CMS, no database, no API in v1. Content lives in `content/` as JSON files.

## Adding a project

1. Copy `content/projects/_template/` to a new folder. Name the folder with your project slug (lowercase, hyphens, no spaces).
2. Edit `project.json` inside. The schema is documented in `content/projects/_template/README.md`.
3. (Optional) Drop a `cover.png` (or `.jpg`, `.svg`, `.webp`) next to `project.json`. It gets copied to `public/projects/{slug}/` automatically during the build.
4. Commit and push. Vercel rebuilds in ~30s.

That's the whole workflow. No code edits, no admin panel, no API call. The build script in `scripts/sync-covers.cjs` handles the image copy, and `lib/projects.ts` reads every project folder at build time, validates against the Zod schema, and feeds them into the page.

If a `project.json` fails validation, the project is **skipped** and a warning is logged. The rest of the site still builds. This is intentional so a typo never takes the whole site down.

### Featuring a project

Set `"featured": true` on a project to surface it in the "Currently shipping" highlight area. If multiple projects are featured, the one with the lowest `order` wins (Paragram is currently at `order: 1`).

### Categories

`category` must be one of `software`, `hardware`, `web`. These map to the top-nav tabs. The "All" tab is built in and shows everything.

## Local development

```bash
pnpm install   # or npm install / yarn
pnpm dev       # runs sync-covers, then next dev on http://localhost:3000
```

Type check:
```bash
pnpm typecheck
```

## Deployment

Connect the GitHub repo to Vercel. No env vars required for v1. The framework preset is Next.js. That's it.

The domain `paracord.center` should be pointed at Vercel via the standard DNS records Vercel provides on the domain settings page.

## File layout

```
paracord-center/
├── app/
│   ├── globals.css         # design system (CSS vars for light/dark, dots, frames)
│   ├── layout.tsx          # root layout, fonts, theme provider
│   ├── page.tsx            # landing page composition
│   └── icon.svg            # favicon
├── components/
│   ├── logo.tsx            # SVG mark (nested squares + center dot)
│   ├── nav.tsx             # sticky top nav with category tabs
│   ├── hero.tsx            # PARACORD + center wordmark block
│   ├── featured.tsx        # highlight card for the featured project
│   ├── project-card.tsx    # single project card + empty slot
│   ├── project-grid.tsx    # filterable grid, padded with empty slots
│   ├── footer.tsx          # operator spec table + copyright
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── theme-toggle.tsx    # dark mode button
├── content/
│   ├── site.json           # site-level config (tagline, intro, operator)
│   └── projects/
│       ├── paragram/       # the current featured project
│       │   └── project.json
│       └── _template/      # copy this to add a project
│           ├── project.json
│           └── README.md
├── lib/
│   ├── types.ts            # Zod schemas: Project, Site
│   ├── projects.ts         # filesystem reader for projects/
│   └── site.ts             # filesystem reader for site.json
├── scripts/
│   └── sync-covers.cjs     # copies cover.* from content/ into public/ at build time
└── public/
    └── projects/           # generated, do not edit by hand
```

## Design rules baked into the code

Two rules apply to every line of copy on the site:

1. No "it's not X, it's Y" constructions
2. No "word — word" em-dash patterns

These are enforced by convention rather than tooling. If you ever bring in an LLM to draft new project descriptions, paste those rules into the prompt.

Other visual conventions:

- **Sharp corners.** `border-radius: 2px` max anywhere. No rounded-2xl.
- **One accent color.** Orange (`#FF8C1A`). Other colors only inside cover images.
- **Hairlines, not shadows.** All separators are 0.5–1.5px orange borders. No `box-shadow`.
- **Monospace everywhere.** Workbench for display, IBM Plex Mono for body. No proportional fonts.
- **Workshop labels.** "UNIT 01", "FIG. 02", "OPERATOR". Borrowed vocabulary from paragram.app for consistency across Paracord properties.

## Adding accounts later

V1 ships without auth because there's nothing to gate. When/if you want Google + Microsoft sign-in (for, say, project comments, gated downloads, or an admin dashboard):

1. `pnpm add next-auth @auth/core`
2. Create `app/api/auth/[...nextauth]/route.ts` with `GoogleProvider` and `AzureADProvider` (the Microsoft one).
3. Add the env vars from `.env.example` to Vercel.
4. Wrap protected sections with `getServerSession`.

The four env vars you'd need (`GOOGLE_CLIENT_ID/SECRET`, `AZURE_AD_CLIENT_ID/SECRET/TENANT_ID`) are pre-listed in `.env.example` for whenever that day comes. Set `AZURE_AD_TENANT_ID=common` for personal + work Microsoft accounts.

Until then the site stays static, fast, and free of any user-data surface.

## Operator

```
OPERATOR    Paracord Commerce s.r.o.
LOCATION    Prague, Czech Republic
DOMAIN      paracord.center
HOSTING     Vercel · Edge network
LICENSE     All rights reserved
```

© 2026 Paracord Commerce s.r.o.
