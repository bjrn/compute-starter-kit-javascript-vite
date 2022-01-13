import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  server: {
    // open: '/docs/index.html',
    port: 1444,
  },
  build: {
    minify: true,
  },
  resolve: {
    dedupe: ['preact'],
  },
  ssr: {
    target: 'webworker',
    noExternal: true,
  },
});
