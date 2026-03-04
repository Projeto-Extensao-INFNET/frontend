import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: 'http://localhost:3333/api-json',
    output: {
      namingConvention: 'kebab-case',
      mode: 'tags-split',
      target: 'src/api/http/routes/',
      schemas: 'src/api/http/models/',
      operationSchemas: 'src/api/http/models/params',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: 'src/api/orval-http-client.ts',
          name: 'orvalHttpClient',
        },
      },
      clean: true,
      indexFiles: true,
      mock: {
        type: 'msw',
        delay: 1000,
        baseUrl: 'http://localhost:3333',
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
