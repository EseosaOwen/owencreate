import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');
const publicDir = resolve(root, 'public');

const svgPath = resolve(publicDir, 'favicon.svg');
const svgBuffer = readFileSync(svgPath);

// apple-touch-icon: 180x180 PNG
await sharp(svgBuffer, { density: 300 })
  .resize(180, 180, { fit: 'contain', background: '#F9F8FF' })
  .png()
  .toFile(resolve(publicDir, 'apple-touch-icon.png'));
console.log('✓ apple-touch-icon.png (180×180)');

// favicon.ico: embed a 32x32 PNG in an ICO container
const png32 = await sharp(svgBuffer, { density: 300 })
  .resize(32, 32, { fit: 'contain', background: '#F9F8FF' })
  .png()
  .toBuffer();

const ico = buildIco(png32, 32, 32);
writeFileSync(resolve(publicDir, 'favicon.ico'), ico);
console.log('✓ favicon.ico (32×32)');

/**
 * Wraps a PNG buffer in a minimal ICO container.
 * Modern browsers and Windows support PNG-compressed ICO images.
 */
function buildIco(pngBuffer, width, height) {
  const HEADER_SIZE = 6;
  const DIR_ENTRY_SIZE = 16;
  const imageOffset = HEADER_SIZE + DIR_ENTRY_SIZE;

  // ICO file header (6 bytes)
  const header = Buffer.alloc(HEADER_SIZE);
  header.writeUInt16LE(0, 0);  // reserved
  header.writeUInt16LE(1, 2);  // type: 1 = icon
  header.writeUInt16LE(1, 4);  // image count: 1

  // Image directory entry (16 bytes)
  const dir = Buffer.alloc(DIR_ENTRY_SIZE);
  dir.writeUInt8(width === 256 ? 0 : width, 0);   // width (0 means 256)
  dir.writeUInt8(height === 256 ? 0 : height, 1); // height
  dir.writeUInt8(0, 2);           // colour count (0 = no palette)
  dir.writeUInt8(0, 3);           // reserved
  dir.writeUInt16LE(1, 4);        // colour planes
  dir.writeUInt16LE(32, 6);       // bits per pixel
  dir.writeUInt32LE(pngBuffer.length, 8);  // image data size
  dir.writeUInt32LE(imageOffset, 12);      // image data offset

  return Buffer.concat([header, dir, pngBuffer]);
}
