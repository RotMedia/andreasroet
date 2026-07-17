import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://andreasroet.de',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
});
