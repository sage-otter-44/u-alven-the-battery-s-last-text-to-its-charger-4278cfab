// The Battery's Last Text to Its Charger — make.fun entry.
// One line, at most 200 characters: the phone battery's final message
// to the charger it waited for all day. Setup: a whole day of broken
// promises and being passed over for lesser gadgets. Punchline lands in
// the final words: the battery spends its last percent on the toaster.
import { writeFileSync, mkdirSync } from "node:fs";

const SETUP =
  "You said 'five more minutes' at 9am. It's 11pm, I'm at 1%, " +
  "and you charged the toothbrush, the earbuds, the vape — everything but me.";
const PUNCHLINE =
  " I'm spending my last 1% texting the toaster. She appreciates me.";

const BUDGET = 200;
const TWIST_ANCHOR = "She appreciates me.";

const entry = SETUP + PUNCHLINE;

if (entry.length < 1 || entry.length > BUDGET) {
  throw new Error(`entry is ${entry.length} chars, must be 1-${BUDGET}`);
}
if (!entry.endsWith(TWIST_ANCHOR)) {
  throw new Error("punchline must land in the final words");
}
console.log(`budget remaining: ${BUDGET - entry.length} chars`);
if (entry.trim() !== entry || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
