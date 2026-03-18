import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormSchema, type LoginFormSchema } from './login.schema';
import { useSignIn } from '@/api/http/generated/api';
import { useNavigate } from '@tanstack/react-router';
import type { SignInResponseDto } from '@/api/http/generated/api.schemas';

export const useLoginModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate({ from: '/login' });

  const navigateToRegister = () => navigate({ to: '/register', replace: true });

  const { mutateAsync: loginMutation, isPending } =
    useSignIn<SignInResponseDto>();

  const onSubmit = handleSubmit(async (data: LoginFormSchema) => {
    await loginMutation({ data });
    reset();
    navigate({ to: '/home', replace: true });
  });

  return {
    register,
    onSubmit,
    isPending,
    errors,
    navigateToRegister,
  };
};
