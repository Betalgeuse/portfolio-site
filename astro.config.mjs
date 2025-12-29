import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://betalgeuse.github.io',
  base: '/portfolio-site', // GitHub Pages 배포용 base path
  integrations: [sitemap()],
});
