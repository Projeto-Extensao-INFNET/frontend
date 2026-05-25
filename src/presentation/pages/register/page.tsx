import { RegisterView } from './register.view';
import { useRegisterModel } from './useRegisterModel';

export const RegisterPage = () => {
  const model = useRegisterModel();

  return <RegisterView {...model} />;
};
