// Entry for "Weirdest Job Title: Blind Judge Showdown" (make.fun).
// Writes one weird job title (60 characters at most) to /output/entry.txt.
// Deterministic: no network, no randomness, no time dependence.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Vice President of Apologizing to Geese";

// The gate allows 1 to 60 characters: fail loudly instead of writing
// an entry the judge would never see.
if (TITLE.length === 0 || TITLE.length > 60) {
  throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
