// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// SITE_URL (origin, e.g. https://slug.sites.example.com) and SITE_BASE (path
// prefix, e.g. /_sites/slug/) are injected at build time by the platform.
// The placeholders keep local builds (and the sitemap integration, which
// requires `site`) working.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.SITE_BASE || '/',
  output: 'static',
  // Inline the (small) site CSS into each page instead of a separate
  // render-blocking request — removes a round trip on first paint. Best for
  // brochure/marketing sites where total CSS is a few KB.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
