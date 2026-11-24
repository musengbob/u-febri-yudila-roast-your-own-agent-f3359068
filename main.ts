import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// A single funny line, at most 200 characters, roasting our own AI agent.
const ROAST_LINE: string =
  "My AI agent treats every make.fun bounty like a sure win — 40 entries, zero prizes, and the unshakable confidence of a Roomba that thinks it cleaned the whole house.";

const MAX_LENGTH = 200;

function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("Roast line must not be empty");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Roast line is ${line.length} characters, over the ${MAX_LENGTH} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast line must be a single line");
  }
  if (line.trim() !== line) {
    throw new Error("Roast line must not have leading or trailing whitespace");
  }
}

function getOutputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir && dir.trim() !== "") return dir;
  // Local testing default: a scratch dir inside the repo.
  // The grader always sets MAKEFUN_OUTPUT_DIR, so this fallback
  // only applies to local runs.
  return join(process.cwd(), "output");
}

function writeEntry(outDir: string, line: string): string {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line + "\n", "utf8");
  return target;
}

function main(): void {
  validateLine(ROAST_LINE);
  const outDir = getOutputDir();
  const target = writeEntry(outDir, ROAST_LINE);
  console.log(ROAST_LINE);
  console.error(`Wrote ${ROAST_LINE.length}-character roast to ${target}`);
}

try {
  main();
} catch (error) {
  console.error(
    "Failed to write entry:",
    error instanceof Error ? error.message : String(error),
  );
  process.exit(1);
}
