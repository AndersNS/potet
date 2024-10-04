/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), flowbite.plugin()],
};
