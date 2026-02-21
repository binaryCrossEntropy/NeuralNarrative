import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypeMathJax from 'rehype-mathjax';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
  site: 'https://neuralnarrative.io',
  integrations: [
    tailwind(),
    react(),
    mdx(),
  ],
});
