import { useLoginModel } from '../useLoginModel';
import { Wrapper, act, renderHook } from '@/__tests__/custom-render';
import { navigateMock } from '../../../../../vitest.setup';

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
