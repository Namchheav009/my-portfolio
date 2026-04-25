import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

writeFileSync(
  resolve(rootDir, "index.html"),
  readFileSync(resolve(rootDir, "index.source.html"), "utf8"),
  "utf8"
);
