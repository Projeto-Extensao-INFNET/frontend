import {
  render,
  renderHook,
  screen,
  userEvent,
  Wrapper,
} from '@/__tests__/custom-render';
import { navigateMock } from '../../../../../vitest.setup';
import { LoginView } from '../login.view';
import { useLoginModel } from '../useLoginModel';

const sut = () => {
  const { result } = renderHook(() => useLoginModel(), {
    wrapper: Wrapper,
  });
  return render(<LoginView {...result.current} />, {});
};

describe('Login', () => {
  const user = userEvent.setup();

  describe('<Form/>', () => {
    describe('Display', () => {
      it.todo('should display Login form with all fields', () => {});
    });

    describe('Errors', () => {
      it.todo(
        'should display form field errors when e-mail is not valid ',
        () => {},
      );

      it.todo(
        'should display form field errors when password is not valid ',
        () => {},
      );
    });
  });

  describe('<Button/>', () => {
    describe('Actions', () => {
      it.todo('should call onSubmit');

      it('should navigate to Register page on button click', async () => {
        sut();

        const button = screen.getByRole('button', {
          name: /ainda não possui conta\? cadastrar!/i,
        });

        await user.click(button);

        expect(navigateMock).toHaveBeenCalledWith({
          to: '/register',
          replace: true,
        });
      });
    });

    describe('Display', () => {
      it.todo('should display "Acessar" button', () => {});

      it.todo(
        'should "display Ainda não possui conta? Cadastrar!" button',
        () => {},
      );

      it.todo('should display pending/disabled button', () => {});
    });
  });
});
