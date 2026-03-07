import { getListUsersMockHandler } from '@/api/http/generated/api.msw';

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
];
