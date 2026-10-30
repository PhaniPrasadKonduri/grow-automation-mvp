import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const specDir = path.join(root, 'docs/spec');
const files = [
  'baseline.json',
  'screens.json',
  'common-controls.json',
  'personas.json',
  'r1-features.json',
  'process-catalog.json',
  'demo-catalogs.json'
];

for (const file of files) {
  const full = path.join(specDir, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing required spec file: ${file}`);
    process.exit(1);
  }
  try {
    JSON.parse(fs.readFileSync(full, 'utf8'));
  } catch (error) {
    console.error(`Invalid JSON in ${file}: ${error.message}`);
    process.exit(1);
  }
}

const baseline = JSON.parse(fs.readFileSync(path.join(specDir, 'baseline.json'), 'utf8'));
const screens = JSON.parse(fs.readFileSync(path.join(specDir, 'screens.json'), 'utf8'));
const commonControls = JSON.parse(fs.readFileSync(path.join(specDir, 'common-controls.json'), 'utf8'));
const personas = JSON.parse(fs.readFileSync(path.join(specDir, 'personas.json'), 'utf8'));
const r1Features = JSON.parse(fs.readFileSync(path.join(specDir, 'r1-features.json'), 'utf8'));
const processCatalog = JSON.parse(fs.readFileSync(path.join(specDir, 'process-catalog.json'), 'utf8'));
const demoCatalogs = JSON.parse(fs.readFileSync(path.join(specDir, 'demo-catalogs.json'), 'utf8'));

const checks = [
  ['screens', screens.length, baseline.screens],
  ['commonControls', commonControls.length, baseline.commonFamilies],
  ['r1Features', r1Features.length, baseline.r1Features],
  ['processCatalog', processCatalog.length, baseline.processes],
  ['demoCatalogs', Object.keys(demoCatalogs).length > 0, true]
];

for (const [name, actual, expected] of checks) {
  if (actual !== expected) {
    console.error(`Cardinality mismatch for ${name}: expected ${expected} but found ${actual}`);
    process.exit(1);
  }
}

if (baseline.screens !== 28 || baseline.screenActions !== 130 || baseline.commonFamilies !== 24 || baseline.r1Features !== 138 || baseline.processes !== 202) {
  console.error('Baseline cardinality does not match the required counts.');
  process.exit(1);
}

console.log('verify:spec passed');
console.log(JSON.stringify({
  baseline: {
    screens: baseline.screens,
    screenActions: baseline.screenActions,
    commonFamilies: baseline.commonFamilies,
    r1Features: baseline.r1Features,
    processes: baseline.processes
  },
  fileCount: files.length,
  source: path.join(root, 'GROW_MVP_Codex_Prompt_Library.md')
}, null, 2));
