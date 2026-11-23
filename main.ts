// Post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
// The post itself is the entry: one post of our own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own, make.fun / @makefunai and our play code in its text.
// POST.json at the repository root names that post; all this program does is
// hand its address to the gate by copying it to the output directory, where
// the house reads the post's replies, reposts and quotes through FxTwitter.
// Nothing the program writes is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

// The gate refuses a POST.json that names no post on X, so check the shape
// before copying: a JSON object with a url string on x.com or twitter.com.
let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (post as { url?: unknown }).url;
if (typeof url !== 'string' || !(url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/'))) {
  console.error('POST.json must name a post on X: {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const OUT_PATH = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(POST_PATH, OUT_PATH);
} catch (err) {
  console.error(`POST.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate reads exactly what this program writes, so confirm the copy
// landed byte for byte before reporting success.
const written = readFileSync(OUT_PATH, 'utf8');
const source = readFileSync(POST_PATH, 'utf8');
if (written !== source) {
  console.error('POST.json copy differs from the repository file');
  process.exit(1);
}
