# Frontend Projeto Extensão

Este projeto é um frontend moderno construído com React, Vite, TypeScript e TanStack Router, utilizando React Query para gerenciamento de dados, TailwindCSS para estilização e diversas bibliotecas auxiliares para produtividade e qualidade de código.

## Principais Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router/latest)
- [TanStack React Query](https://tanstack.com/query/latest)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Playwright](https://playwright.dev/) e [Vitest](https://vitest.dev/) para testes

## Scripts Disponíveis

- `pnpm dev` — Inicia o servidor de desenvolvimento
- `pnpm build` — Gera build de produção
- `pnpm preview` — Visualiza build de produção
- `pnpm test` — Executa testes unitários (Vitest)
- `pnpm test:e2e` — Executa testes end-to-end (Playwright)
- `pnpm lint` — Lint do código com ESLint
- `pnpm format` — Formata o código com Prettier

## Configuração e Execução

1. Instale as dependências:

   ```sh
   pnpm install
   ```

2. Configure as variáveis de ambiente em `.env` e `.env.test` conforme o exemplo em `.env.example` e `.env.test.example`.

3. Rode o projeto:

   ```sh
   pnpm dev
   ```

## Testes

- Testes unitários: `pnpm test` ou `pnpm test:watch`
- Cobertura de testes: `pnpm test:cov`
- Testes E2E: `pnpm test:e2e` ou `pnpm test:e2e:ui`

## Convenções

- Imports absolutos via `@` (configurado em `tsconfig.app.json`)
- Componentes e hooks organizados por domínio
- Estilização com TailwindCSS e shadcn/ui
- Validação de ambiente com Zod

---
