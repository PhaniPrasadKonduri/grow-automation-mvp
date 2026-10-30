import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredRoots = [
  'app',
  'app/grow',
  'db',
  'srv',
  'fixtures',
  'test',
  'docs',
  'scripts',
  '.vscode'
];

const requiredFiles = [
  'AGENTS.md',
  'README.md',
  '.editorconfig',
  '.gitattributes',
  '.gitignore',
  '.env.example',
  'package.json',
  'GROW_MVP_VSCode_Project_Structure_and_Codex_Bootstrap.md',
  'docs/repository-map.md',
  'docs/architecture/overview.md',
  'docs/architecture/service-boundaries.md',
  'docs/architecture/data-and-state.md',
  'docs/architecture/routing-and-floorplans.md',
  'docs/runtime.md',
  'docs/run-guide.md',
  'docs/decisions.md',
  'docs/status.md',
  'app/grow/package.json',
  '.vscode/settings.json',
  '.vscode/extensions.json',
  '.vscode/tasks.json',
  '.vscode/launch.json'
];

const promptLibrary = path.join(root, 'GROW_MVP_Codex_Prompt_Library.md');
if (!fs.existsSync(promptLibrary)) {
  console.error('Missing required prompt library: GROW_MVP_Codex_Prompt_Library.md');
  process.exit(1);
}

const missingRoot = requiredRoots.find((target) => !fs.existsSync(path.join(root, target)));
if (missingRoot) {
  console.error(`Missing required root directory: ${missingRoot}`);
  process.exit(1);
}

const missingFile = requiredFiles.find((target) => !fs.existsSync(path.join(root, target)));
if (missingFile) {
  console.error(`Missing required file: ${missingFile}`);
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (packageJson.private !== true) {
  console.error('Root package.json must have private: true');
  process.exit(1);
}

const uiPackageJson = JSON.parse(fs.readFileSync(path.join(root, 'app/grow/package.json'), 'utf8'));
if (uiPackageJson.private !== true) {
  console.error('app/grow/package.json must have private: true');
  process.exit(1);
}

const gitignore = fs.readFileSync(path.join(root, '.gitignore'), 'utf8');
const requiredIgnores = ['node_modules/', '.runtime/', 'artifacts/', 'coverage/', 'app/grow/dist/', '.env'];
const missingIgnores = requiredIgnores.filter((entry) => !gitignore.includes(entry));
if (missingIgnores.length) {
  console.error(`Missing required gitignore entries: ${missingIgnores.join(', ')}`);
  process.exit(1);
}

console.log('Repository scaffold verification passed.');
console.log(`Prompt library present at: ${promptLibrary}`);
console.log('Required source roots and scaffold files exist.');
