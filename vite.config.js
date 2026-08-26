import { defineConfig } from 'vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
  },
  plugins: [
    {
      name: 'copy-github-pages-cname',
      closeBundle() {
        copyFileSync(resolve('CNAME'), resolve('docs/CNAME'));
      },
    },
  ],
});
