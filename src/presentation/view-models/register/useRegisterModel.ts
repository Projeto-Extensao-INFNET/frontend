import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUp } from '@/api/http/generated/api';
import { registerFormSchema, type RegisterFormSchema } from './schema';
import { useNavigate } from '@tanstack/react-router';

export const useRegisterModel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      birthDate: '',
      documentType: 'CPF',
      document: '',
      role: 'PATIENT',
    },
    mode: 'onSubmit',
  });

  const navigate = useNavigate({ from: '/register' });

  const navigateToLogin = () => navigate({ to: '/login', replace: true });

  const { mutateAsync: registerMutation, isPending } = useSignUp();

  const onSubmit = handleSubmit(async (data: RegisterFormSchema) => {
    await registerMutation({ data });
    reset();
    navigate({ to: '/login', replace: true });
  });

  return {
    register,
    onSubmit,
    isPending,
    errors,
    control,
    navigateToLogin,
  };
};
