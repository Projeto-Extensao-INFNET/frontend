import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,

  clientPrefix: 'VITE_',
  client: {
    VITE_ENV: z
      .enum(['test', 'e2e', 'development', 'production'])
      .default('development'),
    VITE_BASE_URL: z.string(),
  },

  server: {},
});
