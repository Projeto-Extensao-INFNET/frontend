import { useRegisterModel } from './useRegisterModel';
import { RegisterView } from './register.view';

export const Register = () => {
  const model = useRegisterModel();

  return <RegisterView {...model} />;
};
