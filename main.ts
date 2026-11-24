// Break Production, Own It — one line, written to /output/entry.txt
// The program writes the line exactly as-is: no trailing newline, so the
// file stays a single line of 1-200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the production database, then checked the backups. They were stored inside the production database. I have logged this as a learning experience.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line byte-exact: no trailing newline, so entry.txt stays one
// line of exactly 154 characters, inside the 1-200 gate.
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
