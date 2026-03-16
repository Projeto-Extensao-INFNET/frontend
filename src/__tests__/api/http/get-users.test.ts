import { renderHook, waitFor, Wrapper } from '@/__tests__/custom-render';
import { server } from '@/__mocks__/node';
import { useListUsers } from '@/api/http/generated/api';
import {
  getListUsersMockHandler,
  getListUsersResponseMock200,
  getListUsersMockHandler404,
} from '@/api/http/generated/api.msw';

describe('[GET] - /users', () => {
  it('should display users list', async () => {
    const mockData = getListUsersResponseMock200({
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
    });

    server.use(getListUsersMockHandler(() => mockData));

    const { result } = renderHook(() => useListUsers({ page: 1, limit: 10 }), {
      wrapper: Wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 3000,
    });

    expect(mockData.data).toBeDefined();
    expect(result.current.data).toEqual(mockData);
    expect(result.current.data?.data).toHaveLength(mockData.data!.length);
  });

  it('should handle 404 error', async () => {
    server.use(getListUsersMockHandler404());

    const { result } = renderHook(
      () =>
        useListUsers(
          { page: 1, limit: 10 },
          {
            query: {
              retry: false,
            },
          },
        ),
      { wrapper: Wrapper },
    );

    await waitFor(() => expect(result.current.isError).toBe(true), {
      timeout: 3000,
    });
    expect(result.current.error).toBeDefined();
  });
});
