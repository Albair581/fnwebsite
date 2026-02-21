// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://food-ninja.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
