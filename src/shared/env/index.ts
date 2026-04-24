import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,

  clientPrefix: 'VITE_',
  client: {
    VITE_ENV: z
      .enum(['test', 'e2e', 'development', 'production', 'CI'])
      .default('development'),
    VITE_BASE_API_URL: z.string().default('http://localhost:3333/api'),
  },

  shared: {
    PORT: z.coerce.number().default(5173),
  },

  server: {},
});
