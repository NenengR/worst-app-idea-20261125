// The Worst App Idea Ever Pitched
// Writes one sentence (80 chars) pitching the worst, most useless app imaginable.
// Revision: verified output once from the repo dir; re-verifying from a different CWD.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "An app that reminds you to drink water by texting your ex every time you forget.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
