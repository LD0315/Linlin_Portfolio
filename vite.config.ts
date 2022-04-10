import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    reactPlugin({
      include: ['/*.tsx', '/*.ts'],
      exclude: ['/node_modules/'],
    }) as any,
  ],
  envDir: resolve('./.env'),
  envPrefix: 'REACT_APP_',
  base: './',

  esbuild: {
    sourcemap: true,
    jsxInject: `
      import { Fragment as Fragment__ } from 'react';
      import { jsx } from '@emotion/react';
    `,
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment__',
  },
  root: resolve('./src'),
  server: {
    host: '0.0.0.0',
    port: 9005,
    https: false,

    force: true,
  },
  build: {
    outDir: resolve('./build'),
    emptyOutDir: true,
  },
  define: {},
  resolve: {
    alias: {},
  },
});
