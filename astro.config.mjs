import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://selfledexecutive.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
