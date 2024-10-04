// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), db(), react()],
  adapter: vercel(),
});

