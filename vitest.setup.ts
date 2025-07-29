/** biome-ignore-all lint/performance/noNamespaceImport: mandatory by react testing library */
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();

  vi.resetAllMocks();
});
