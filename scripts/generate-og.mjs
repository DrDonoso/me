// Generates public/og.png (1200x630) for social sharing cards.
// Run with: npm run og
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Kept in sync with src/config.ts by hand — this runs outside Astro's TS pipeline.
const NAME = "David Rodríguez Donoso";
const ROLE = "Cloud & DevOps Consultant";
const COMPANY = "Microsoft";
const DOMAIN = "drdonoso.com";
const ACCENT = "#D97706";
const ACCENT_TEXT = "#B45309";

const FONT = "Segoe UI, Helvetica Neue, DejaVu Sans, Arial, sans-serif";

const escapeXml = (s) =>
  s.replace(
    /[<>&'"]/g,
    (c) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[
        c
      ]
  );

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(0 0) scale(1100 1400)">
      <stop offset="0"    stop-color="${ACCENT}" stop-opacity="0.30"/>
      <stop offset="0.25" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="0.5"  stop-color="${ACCENT}" stop-opacity="0.06"/>
      <stop offset="1"    stop-color="#ffffff"   stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#g)"/>

  <rect x="80" y="72" width="88" height="88" rx="20" fill="${ACCENT}"/>
  <path fill="#ffffff" fill-rule="evenodd"
        transform="translate(80 72) scale(2.75)"
        d="M10 8h5a8 8 0 0 1 0 16h-5V8Zm4 4h1a4 4 0 0 1 0 8h-1v-8Z"/>

  <text x="80" y="330" font-family="${FONT}" font-size="82" font-weight="700"
        fill="#1f2937" letter-spacing="-2">${escapeXml(NAME)}</text>

  <text x="80" y="400" font-family="${FONT}" font-size="38" font-weight="500"
        fill="#4b5563">${escapeXml(ROLE)} at <tspan fill="${ACCENT_TEXT}" font-weight="700">${escapeXml(COMPANY)}</tspan></text>

  <rect x="80" y="446" width="120" height="7" rx="4" fill="${ACCENT}"/>

  <text x="80" y="556" font-family="${FONT}" font-size="30" font-weight="600"
        fill="${ACCENT_TEXT}">${escapeXml(DOMAIN)}</text>
</svg>`;

const out = resolve(root, "public/og.png");
mkdirSync(dirname(out), { recursive: true });

const png = await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(out, png);

const meta = await sharp(png).metadata();
const stats = await sharp(png).stats();
const stdev = stats.channels.map((c) => c.stdev.toFixed(1)).join(" / ");
console.log(
  `Wrote public/og.png — ${meta.width}x${meta.height}, ${(png.length / 1024).toFixed(1)} KB`
);
console.log(
  `Channel stdev (R/G/B): ${stdev} — non-zero means content rendered, not a blank canvas`
);
