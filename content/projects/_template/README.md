# Project template

Copy this whole folder, rename it to your project slug (lowercase, hyphens, no spaces),
edit `project.json`, optionally drop a `cover.png` (or `.jpg`, `.svg`, `.webp`) next to it.

The folder name becomes the URL slug. Folders that start with `_` (like this one)
are ignored by the build.

## Fields

- **name** — Display name shown in the card and detail page.
- **tagline** — One line, ≤ 80 chars. Shows on the project card.
- **description** — Two to four sentences. Shows on the featured block.
- **category** — `software` | `hardware` | `web`. Determines which top-nav tab it lives under.
- **status** — `active` | `beta` | `wip` | `archived`.
- **version** — Optional. e.g. `v0.4.2.1`.
- **url** — Optional. External live URL.
- **repoUrl** — Optional. Public repo URL.
- **featured** — `true` to surface in the Currently Shipping highlight. First featured wins.
- **order** — Lower = earlier. Default 99.

## Cover image

Save a file called `cover.png` (or `.jpg`, `.svg`, `.webp`) in this folder.
It'll be picked up automatically. Keep it square-ish and under 200 KB.
