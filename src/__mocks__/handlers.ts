import {
  getListUsersMockHandler,
  getSignUpMockHandler,
  // getSignInMockHandler,
} from '@/api/http/generated/api.msw';

// TODO [ ] => corrigir/validar mocks do backend para o ambiente de testes

export const handlers = () => [
  getListUsersMockHandler({
    data: [
      { id: '1', name: 'João Silva', email: 'joao@test.com' },
      { id: '2', name: 'Maria Santos', email: 'maria@test.com' },
      { id: '3', name: 'Pedro Costa', email: 'pedro@test.com' },
    ],
    meta: {
      total_items: 3,
      total_pages: 1,
      page: 1,
      limit: 10,
    },
  }),
  getSignUpMockHandler({
    data: {
      name: 'Teste',
      email: 'teste@test.com',
      password: '12345678',
      birthDate: '2005-09-26T00:00:00.000Z',
      role: 'PATIENT',
      documentType: 'CPF',
      document: '99999999999',
    },
  }),
  // getSignInMockHandler({
  //   data: {
  //     email: 'teste@test.com',
  //     password: '12345678',
  //   },
  // }),
];
