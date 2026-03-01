/**
 * Batch Gemini watermark remover
 * Patches over the bottom-right sparkle watermark with neighboring pixels.
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processImage(inputPath, outputPath, outputOpts) {
  const metadata = await sharp(inputPath).metadata();
  const { width, height } = metadata;

  // Watermark is ~96x96 sparkle centered at (width-72-48, height-72-48)
  // i.e. 72px padding from edges. We'll patch a generous 160x160 area
  // from the bottom-right corner using the region just to its LEFT (flipped).
  const patchW = 160;
  const patchH = 160;

  // Source: region to the LEFT of the watermark
  const srcLeft = Math.max(0, width - patchW * 2);
  const srcTop = height - patchH;

  const patchBuffer = await sharp(inputPath)
    .extract({ left: srcLeft, top: srcTop, width: patchW, height: patchH })
    .flop() // mirror horizontally for seamless blend
    .toBuffer();

  // Composite over watermark area
  const cleaned = await sharp(inputPath)
    .composite([{
      input: patchBuffer,
      left: width - patchW,
      top: height - patchH,
    }])
    .toBuffer();

  // Resize and compress
  await sharp(cleaned)
    .resize(outputOpts.width, outputOpts.height, { fit: 'cover' })
    .jpeg({ quality: outputOpts.quality || 90 })
    .toFile(outputPath);
}

const BASE = path.resolve(import.meta.dirname, '..');
const TESTING = path.join(BASE, 'assets', 'testing');
const PUBLIC = path.join(BASE, 'public', 'images');

const jobs = [
  { src: 'Gemini Generated Image (5).webp', dst: 'hero/hero-01.jpg', w: 1200, h: 1600, q: 90 },
  { src: 'Gemini Generated Image (6).webp', dst: 'hero/hero-02.jpg', w: 1200, h: 1600, q: 90 },
  { src: 'Gemini Generated Image (7).webp', dst: 'hero/hero-03.jpg', w: 1200, h: 1600, q: 90 },
  { src: 'Gemini Generated Image (8).webp', dst: 'hero/hero-04.jpg', w: 1200, h: 1600, q: 90 },
  { src: 'Gemini Generated Image (9).webp', dst: 'hero/hero-05.jpg', w: 1200, h: 1600, q: 90 },
  { src: 'Gemini Generated Image (10).webp', dst: 'stacking/stack-02.jpg', w: 780, h: 1020, q: 85 },
  { src: 'Gemini Generated Image (12).webp', dst: 'stacking/stack-03.jpg', w: 780, h: 1020, q: 85 },
  { src: 'Google Gemini Generated Image (1).webp', dst: 'stacking/stack-04.jpg', w: 780, h: 1020, q: 85 },
  { src: 'Gemini Generated Image (11).webp', dst: 'stacking/stack-05.jpg', w: 780, h: 1020, q: 85 },
  { src: 'Google Gemini Generated Image (2).webp', dst: 'story/story-map.jpg', w: 1600, h: 1200, q: 90 },
  { src: 'Gemini Generated Image (13).webp', dst: 'story/story-session.jpg', w: 1600, h: 1200, q: 90 },
  { src: 'Gemini Generated Image (14).webp', dst: 'story/story-club.jpg', w: 1600, h: 1200, q: 90 },
];

console.log(`Processing ${jobs.length} images...\n`);

for (const job of jobs) {
  const inputPath = path.join(TESTING, job.src);
  const outputPath = path.join(PUBLIC, job.dst);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  process.stdout.write(`  ${job.dst} ... `);
  await processImage(inputPath, outputPath, { width: job.w, height: job.h, quality: job.q });
  const stats = fs.statSync(outputPath);
  console.log(`✓ ${(stats.size / 1024).toFixed(0)} KB`);
}

console.log('\nDone!');
