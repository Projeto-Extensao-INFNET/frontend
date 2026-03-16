import type { FC } from 'react';
import type { useLoginModel } from './useLoginModel';

export const LoginView: FC<ReturnType<typeof useLoginModel>> = () => {
  return <h1>LOGIN</h1>;
};
