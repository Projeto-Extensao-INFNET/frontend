import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: 'http://localhost:3333/api-json',
    output: {
      namingConvention: 'kebab-case',
      mode: 'split',
      target: 'src/api/http/generated/api.ts',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: 'src/api/http-client.ts',
          name: 'orvalHttpClient',
        },
      },
      clean: true,
      indexFiles: true,
      mock: {
        type: 'msw',
        delay: 1000,
        useExamples: false,
        generateEachHttpStatus: true,
        indexMockFiles: true,
        preferredContentType: 'application/json',
        locale: 'pt_BR',
      },
    },
    hooks: {
      afterAllFilesWrite: 'pnpm exec prettier --write',
    },
  },
});
