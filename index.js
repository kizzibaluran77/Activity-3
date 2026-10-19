import fs from 'node:fs/promises';
import path from 'node:path';

const filename = process.argv[2];

if (!filename) {
  console.log('Usage: npm start <filename>');
  console.log('Example: npm start sample.txt');
  process.exit(1);
}

try {
  const filePath = path.resolve(filename);
  const text = await fs.readFile(filePath, 'utf-8');

  const lines = text.length === 0
    ? 0
    : text.replace(/\r?\n$/, '').split(/\r?\n/).length;
  const words = text.split(/\s+/).filter(Boolean).length;
  const characters = text.length;

  console.log(`File: ${filename}`);
  console.log(`Lines: ${lines}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${characters}`);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error(`Error: file "${filename}" was not found.`);
  } else {
    console.error(`Error: ${err.message}`);
  }
  process.exit(1);
}