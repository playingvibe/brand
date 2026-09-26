/**
 * Checks the emoji folder against the contract in CONTRIBUTING.md, with no dependencies: every file
 * is a PNG or GIF, square, at most 1024 px, and at most 1 MB. Run it before opening a pull request.
 *
 * Usage: node scripts/check-assets.js
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "emojis");
const MAX_PX = 1024;
const MAX_BYTES = 1024 * 1024;
const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const problems = [];
let checked = 0;
for (const name of readdirSync(DIR).sort()) {
  const file = path.join(DIR, name);
  if (!statSync(file).isFile() || name === "README.md") continue;
  checked += 1;
  const bytes = readFileSync(file);
  let width;
  let height;
  if (name.endsWith(".png") && bytes.subarray(0, 8).equals(PNG)) {
    width = bytes.readUInt32BE(16);
    height = bytes.readUInt32BE(20);
  } else if (name.endsWith(".gif") && bytes.subarray(0, 3).toString("latin1") === "GIF") {
    width = bytes.readUInt16LE(6);
    height = bytes.readUInt16LE(8);
  } else {
    problems.push(`${name}: not a PNG or GIF`);
    continue;
  }
  if (width !== height) problems.push(`${name}: ${width}x${height} is not square`);
  if (width > MAX_PX) problems.push(`${name}: ${width}px is larger than ${MAX_PX}px`);
  if (bytes.length > MAX_BYTES) problems.push(`${name}: ${(bytes.length / 1048576).toFixed(1)} MB is larger than 1 MB`);
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`${checked} emoji checked, all fine`);
