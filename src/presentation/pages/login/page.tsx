import { LoginView } from './login.view';
import { useLoginModel } from './useLoginModel';

export const LoginPage = () => {
  const model = useLoginModel();
  return <LoginView {...model} />;
};
