# **FUTURO NOME DO PROJETO**

## Índice

- [**FUTURO NOME DO PROJETO**](#futuro-nome-do-projeto)
  - [Índice](#índice)
  - [Sobre o Projeto](#sobre-o-projeto)
    - [FUTURO RESUMO DO PROJETO](#futuro-resumo-do-projeto)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquivos .env](#arquivos-env)
  - [Scripts Disponíveis](#scripts-disponíveis)
  - [Testes](#testes)
  - [Como Rodar Localmente](#como-rodar-localmente)
    - [Rodando Testes](#rodando-testes)

---

## Sobre o Projeto

### FUTURO RESUMO DO PROJETO

## Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) (testes unitários)
- [Playwright](https://playwright.dev/) (testes end-to-end)
- [Testing Library](https://testing-library.com/)
- [TailwindCSS](https://tailwindcss.com/) (estilização)
- [BiomeJs](https://biomejs.dev/guides/getting-started) (linting)
- [Husky](https://typicode.github.io/husky/) (git hooks)
- [MSW](https://mswjs.io/) (mock de APIs)

## Arquivos .env

O projeto utiliza diferentes arquivos `.env` para separar variáveis de ambiente por contexto:

- `.env.development`: Carregado automaticamente pelo Vite quando rodando o projeto em modo desenvolvimento (`pnpm dev`).
- `.env.test`: Carregado explicitamente nos scripts de teste unitário via `dotenv-cli` (ex: `pnpm test`, `pnpm test:unit`). Não é carregado automaticamente pelo Vite.
- `.env.e2e`: Carregado explicitamente nos scripts de teste e2e via `dotenv-cli` (ex: `pnpm test:e2e`). Não é carregado automaticamente pelo Vite.

> Dica: Nunca coloque segredos ou credenciais sensíveis em arquivos `.env` versionados.

## Scripts Disponíveis

Veja todos os scripts no `package.json`. Os principais são:

| Script            | Descrição                                             |
| ----------------- | ----------------------------------------------------- |
| `dev`             | Inicia o servidor de desenvolvimento                  |
| `dev:test`        | Inicia o Vite com variáveis de ambiente de teste      |
| `dev:test:e2e`    | Inicia o Vite com variáveis de ambiente de e2e        |
| `lint`            | Executa o BiomeJs para análise de código              |
| `test`            | Roda todos os testes unitários com Vitest             |
| `test:watch`      | Roda testes unitários em modo observação              |
| `test:coverage`   | Gera relatório de cobertura dos testes unitários      |
| `test:unit`       | Roda apenas testes unitários (exclui e2e)             |
| `test:unit:watch` | Roda testes unitários (exclui e2e) em modo observação |
| `test:e2e`        | Executa testes end-to-end com Playwright              |
| `test:e2e:headed` | Executa testes e2e com navegador visível              |
| `test:e2e:debug`  | Executa testes e2e em modo debug                      |
| `test:e2e:ui`     | Abre a interface do Playwright para rodar testes e2e  |
| `test:e2e:report` | Exibe o relatório dos testes e2e                      |

## Testes

- **Unitários:** Ficam em arquivos `.test.ts(x)` ou `.spec.ts(x)` dentro de `src/`.
- **End-to-end:** Ficam em `tests/` com extensões `.e2e.ts(x)`, `.spec-e2e.tsx`, `.test-e2e.tsx`.
- **Cobertura:** Apenas para testes unitários (Vitest).

## Como Rodar Localmente

1. Instale as dependências:

   ```sh
   pnpm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```sh
   pnpm dev
   ```

3. Acesse `http://localhost:5173` no navegador.

### Rodando Testes

- **Unitários:**

  ```sh
  pnpm test
  ```

- **End-to-end:**

  ```sh
  pnpm test:e2e
  ```

> Autor [Nathan Rodrigues Vieira](https://github.com/NathanRodriguesVieira99)
