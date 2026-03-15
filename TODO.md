# TODO

[x] - Configurar roteamento (testar entre TanStack Router e React Router)
[x] - Usar Orval para gerar queries com o TanStack Query + axios?
[x] - Usar MSW para mockar as respostas da API para testes?

## Backend

[ ] - Validar fluxo completo de refresh com cookie HttpOnly no navegador (signin -> refresh -> logout)

### Frontend (interceptors)

[x] - Corrigir leitura do token para enviar apenas o `accessToken` no header `Authorization`
[x] - Ajustar refresh para não enviar `refreshToken` no body
[x] - Garantir que chamada de refresh use cliente com `withCredentials: true`

### Testes e validação

[ ] - Criar teste de integração E2E para fluxo de autenticação com cookie HttpOnly
[ ] - Criar teste no frontend para interceptor de refresh em cenário de `401`
[ ] - Testar manualmente em ambiente local e ambiente próximo de produção (HTTPS)
