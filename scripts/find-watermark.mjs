/**
 * Scan an image to find the exact watermark position by correlating
 * with the reference sparkle pattern.
 */
import sharp from 'sharp';
import path from 'path';

const BASE = path.resolve(import.meta.dirname, '..');
const testImage = path.join(BASE, 'assets/testing/Gemini Generated Image (5).webp');
const refImage = path.resolve(import.meta.dirname, 'assets/bg_96.png');

// Load reference alpha map
const ref = await sharp(refImage).raw().toBuffer({ resolveWithObject: true });
const refW = ref.info.width;
const refH = ref.info.height;

// Load test image
const img = await sharp(testImage).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const imgW = img.info.width;
const imgH = img.info.height;

console.log(`Image: ${imgW}x${imgH}`);
console.log(`Reference watermark: ${refW}x${refH}`);

// Scan bottom-right quadrant for the sparkle
// The sparkle is bright white on the image. Look for the brightest pixel cluster
// in the bottom-right 200x200 region
const scanSize = 200;
const startX = imgW - scanSize;
const startY = imgH - scanSize;

// For each possible offset in the scan region, compute correlation with reference
let bestScore = -1;
let bestX = 0, bestY = 0;

for (let oy = startY; oy <= imgH - refH; oy++) {
  for (let ox = startX; ox <= imgW - refW; ox++) {
    let score = 0;
    // Sample every 4th pixel for speed
    for (let r = 0; r < refH; r += 4) {
      for (let c = 0; c < refW; c += 4) {
        const refIdx = (r * refW + c) * ref.info.channels;
        const refBright = Math.max(ref.data[refIdx], ref.data[refIdx+1], ref.data[refIdx+2]);
        if (refBright < 30) continue; // skip dark pixels in reference

        const imgIdx = ((oy + r) * imgW + (ox + c)) * 4;
        const imgBright = Math.max(img.data[imgIdx], img.data[imgIdx+1], img.data[imgIdx+2]);
        // Higher image brightness where reference is bright = match
        score += imgBright * (refBright / 255);
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestX = ox;
      bestY = oy;
    }
  }
}

console.log(`\nBest watermark position: (${bestX}, ${bestY})`);
console.log(`Distance from right edge: ${imgW - bestX - refW}`);
console.log(`Distance from bottom edge: ${imgH - bestY - refH}`);
console.log(`Score: ${bestScore}`);
