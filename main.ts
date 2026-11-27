// u-coral-404-one-liner-laughs-aa872d41: writes one line to /output/entry.txt.
// Node 22, TypeScript as-is, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, written by hand for this bounty.
const LINE = "My therapist says I use humour as a defence mechanism, which is rich coming from a woman who charges by the hour to listen to it.";

// Write the line exactly, with no trailing newline, so the gate counts it as-is.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
