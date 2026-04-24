import { defineConfig, devices } from '@playwright/test';

import { env } from '@/shared/env';

const PORT = env.PORT ?? '5173';
const BASE_URL = env.VITE_BASE_API_URL ?? `http://localhost:${PORT}`;
const CI_ENV = env.VITE_ENV === 'CI';

export default defineConfig({
  testDir: './src/__tests__/e2e',
  fullyParallel: true,
  forbidOnly: !!CI_ENV,
  retries: CI_ENV ? 2 : 0,
  workers: CI_ENV ? 1 : undefined,
  expect: { timeout: CI_ENV ? 15000 : 5000 },
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  // webServer: {
  //   command: CI_ENV ? 'pnpm start' : 'pnpm dev',
  //   url: BASE_URL,
  //   reuseExistingServer: !CI_ENV,
  //   timeout: 180 * 1000,
  //   env: {
  //     PORT,
  //     ...(CI_ENVTABASE_URL
  //       ? { DATABASE_URL: CI_ENVTABASE_URL }
  //       : {}),
  //   },
  // },
});
