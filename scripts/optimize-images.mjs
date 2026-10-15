import { readdirSync, statSync, rmSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WRITE = process.argv.includes("--write");

const DIRS = ["public", "vanity"];
const SRC = /\.(png|jpe?g)$/i;
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const PICTURE = new Set(["santa", "delta-rune-maker"]);

const PHOTOS = new Set(["femtanyl", "birthday", "ksb", "bilb"]);
const CAP_PHOTO = 400;
const CAP_DEFAULT = 512;

const SHARP = { webp: { quality: 80 }, avif: { quality: 60, effort: 4 } };

const ANIMATED = { size: 120, quality: 75, fps: null };

const kb = (n) => (n / 1024).toFixed(1).padStart(8);

function isAnimatedPng(buf) {
  if (buf.length < 8 || !buf.subarray(0, 8).equals(PNG_SIG)) return false;
  return buf.includes(Buffer.from("acTL"));
}

function encodeWebpFrames(file, outPath) {
  const args = ["-y", "-loglevel", "error", "-i", file];
  const vf = [`scale=${ANIMATED.size}:${ANIMATED.size}:flags=lanczos`];
  if (ANIMATED.fps) vf.push(`fps=${ANIMATED.fps}`);
  args.push(
    "-vf", vf.join(","),
    "-c:v", "libwebp_anim",
    "-lossless", "0",
    "-q:v", String(ANIMATED.quality),
    "-compression_level", "6",
    "-loop", "0",
    "-an",
    outPath,
  );
  execFileSync("ffmpeg", args);
}

const rows = [];

for (const dir of DIRS) {
  const abs = join(root, dir);
  if (!existsSync(abs)) continue;

  for (const name of readdirSync(abs)) {
    if (!SRC.test(name)) continue;

    const base = name.replace(/\.[^.]+$/, "");
    const file = join(abs, name);
    const buf = readFileSync(file);
    const orig = buf.length;

    if (isAnimatedPng(buf)) {
      const outPath = join(abs, `${base}.webp`);
      rows.push({ file: `${dir}/${name}`, base, orig, animated: true, outPath, replaced: WRITE });
      if (WRITE) {
        encodeWebpFrames(file, outPath);
        rmSync(file);
      }
      continue;
    }

    const meta = await sharp(file).metadata();
    const cap = PHOTOS.has(base) ? CAP_PHOTO : CAP_DEFAULT;
    const needsResize = Math.max(meta.width, meta.height) > cap;
    const make = () =>
      needsResize
        ? sharp(file).resize({ width: cap, height: cap, fit: "inside", withoutEnlargement: true })
        : sharp(file);

    const webpSize = (await make().webp(SHARP.webp).toBuffer()).length;
    const avifSize = (await make().avif(SHARP.avif).toBuffer()).length;
    const keepWebp = webpSize < orig;
    const keepAvif = PICTURE.has(base) && avifSize < orig;

    rows.push({
      file: `${dir}/${name}`,
      base,
      orig,
      webpSize,
      avifSize,
      keepWebp,
      keepAvif,
      replaced: keepWebp || keepAvif,
    });

    if (!WRITE) continue;
    if (keepWebp) await make().webp(SHARP.webp).toFile(join(abs, `${base}.webp`));
    if (keepAvif) await make().avif(SHARP.avif).toFile(join(abs, `${base}.avif`));
    if (keepWebp || keepAvif) rmSync(file);
  }
}

console.log(`mode=${WRITE ? "WRITE" : "dry-run"}`);
console.log("file".padEnd(30), "orig".padEnd(10), "webp".padEnd(10), "avif".padEnd(10), "action");
for (const r of rows.sort((a, b) => b.orig - a.orig)) {
  const action = r.animated
    ? `animated webp (${ANIMATED.size}px q${ANIMATED.quality})`
    : !r.replaced
      ? "keep original"
      : [r.keepAvif && "avif", r.keepWebp && "webp"].filter(Boolean).join(" + ");
  console.log(
    r.file.padEnd(30),
    kb(r.orig),
    kb(!r.animated && r.keepWebp ? r.webpSize : 0),
    kb(!r.animated && r.keepAvif ? r.avifSize : 0),
    action,
  );
}

const before = rows.reduce((a, r) => a + r.orig, 0);
const after = rows.reduce(
  (a, r) => a + (r.animated ? 0 : r.replaced ? (r.keepWebp ? r.webpSize : r.avifSize) : r.orig),
  0,
);
console.log(`\nTOTAL (static): ${(before / 1024).toFixed(0)} kB -> ${(after / 1024).toFixed(0)} kB`);
if (!WRITE) console.log("(re-run with --write to apply)");
