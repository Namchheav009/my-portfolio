import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const distDir = join(rootDir, "dist");
const assetsDir = join(rootDir, "assets");
const distAssetsDir = join(distDir, "assets");
const rootIndex = join(rootDir, "index.html");
const distIndex = join(distDir, "index.html");

// Restore the source entry html before building.
writeFileSync(rootIndex, readFileSync(join(rootDir, "index.source.html"), "utf8"), "utf8");

// Build the Vite app first using the normal source index.html.
execSync("npx vite build", {
  cwd: rootDir,
  stdio: "inherit",
});

if (!existsSync(distIndex)) {
  throw new Error("Build completed, but dist/index.html was not generated.");
}

if (existsSync(assetsDir)) {
  rmSync(assetsDir, { recursive: true, force: true });
}

mkdirSync(assetsDir, { recursive: true });

if (existsSync(distAssetsDir)) {
  cpSync(distAssetsDir, assetsDir, { recursive: true });
}

for (const fileName of readdirSync(distDir)) {
  if (fileName === "assets") {
    continue;
  }

  cpSync(join(distDir, fileName), join(rootDir, fileName), { recursive: true });
}

const html = readFileSync(distIndex, "utf8")
  .replace(/(href|src)="\/assets\//g, '$1="./assets/')
  .replace(/(href|src)="\/(?!assets\/)/g, '$1="./');

writeFileSync(rootIndex, html, "utf8");
