// news-image-20261123 — entry program (Node 22, standard library only).
// The image is the entry.png committed next to this file. This program
// copies it into the directory the grader reads from, so the judge sees
// exactly the bytes that were built and verified locally.
//
// Run it anywhere with:
//   MAKEFUN_OUTPUT_DIR=./out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log(`entry.png written to ${join(outDir, "entry.png")}`);
