import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tsConfigPaths(), react(), tailwindcss()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
