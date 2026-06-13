/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs/promises');
const path = require('node:path');

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'content', 'projects');
const DEST = path.join(ROOT, 'public', 'projects');

const COVER_EXTS = ['png', 'jpg', 'jpeg', 'svg', 'webp'];

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(SRC))) {
    console.log('[sync-covers] no content/projects directory, skipping');
    return;
  }

  // Wipe + recreate destination so deleted projects don't leak old covers
  await fs.rm(DEST, { recursive: true, force: true });
  await fs.mkdir(DEST, { recursive: true });

  const entries = await fs.readdir(SRC, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

    const srcDir = path.join(SRC, entry.name);
    for (const ext of COVER_EXTS) {
      const srcFile = path.join(srcDir, `cover.${ext}`);
      if (await exists(srcFile)) {
        const destDir = path.join(DEST, entry.name);
        await fs.mkdir(destDir, { recursive: true });
        await fs.copyFile(srcFile, path.join(destDir, `cover.${ext}`));
        copied++;
        break;
      }
    }
  }

  console.log(`[sync-covers] copied ${copied} cover image(s) to public/projects/`);
}

main().catch((err) => {
  console.error('[sync-covers] failed:', err);
  process.exit(1);
});
