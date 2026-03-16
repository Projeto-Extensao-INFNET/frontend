import { LoginView } from './login.view';
import { useLoginModel } from './useLoginModel';

export const Login = () => {
  const model = useLoginModel();
  return <LoginView {...model} />;
};
