import { getAPIProjetoDeExtensãoMock } from '@/api/http/generated/api.msw';

export const handlers = () => [...getAPIProjetoDeExtensãoMock()];
