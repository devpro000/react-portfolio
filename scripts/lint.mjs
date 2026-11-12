import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const cwd = process.cwd();
const args = process.argv.slice(2).filter(arg => arg !== '.' && arg !== '--');
const checkMode = args.includes('--check');
const prettierMode = checkMode ? '--check' : '--write';
const filePattern = './src/**/*.{js,jsx,json,ts,tsx}';
const jsPattern = './src/**/*.{js,jsx,ts,tsx}';
const prettierBin = join(cwd, 'node_modules', 'prettier', 'bin', 'prettier.cjs');
const eslintBin = join(cwd, 'node_modules', 'eslint', 'bin', 'eslint.js');

const run = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, {
    cwd,
    stdio: 'inherit',
    shell: false,
  });

  if (result.error) {
    throw result.error;
  }

  if (typeof result.status === 'number' && result.status !== 0) {
    process.exit(result.status);
  }
};

run(process.execPath, [prettierBin, prettierMode, filePattern]);
run(process.execPath, [
  eslintBin,
  jsPattern,
  ...(checkMode ? [] : ['--fix']),
  '--max-warnings=0',
]);
