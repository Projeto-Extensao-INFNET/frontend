import { navigateMock } from 'vitest.setup';
import { useLoginModel } from '@presentation/view-models/login/useLoginModel';
import { act, renderHook, Wrapper } from '@tests/utils/custom-render';

describe('Login Model', () => {
  it.todo('should call onSubmit', () => {});

  it(' should call navigate to Register page', () => {
    const { result } = renderHook(() => useLoginModel(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.navigateToRegister();
    });

    expect(navigateMock).toHaveBeenCalledWith({
      to: '/register',
      replace: true,
    });
  });
});
