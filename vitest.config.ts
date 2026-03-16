import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.{spec,test}.{ts,tsx}'],
    reporters: ['verbose'],
    environment: 'jsdom',
    root: './',
    globals: true,
    restoreMocks: true,
    clearMocks: true,
    testTimeout: 10000,
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['text', 'html', 'lcov', 'cobertura'],
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.e2e-spec.ts',
        '**/types/**',
        '**/*.d.ts',
        '**/mocks/**',
        '/node_modules/',
        '/e2e/',
      ],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },
  },
  plugins: [tsConfigPaths(), react()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
    },
  },
});
