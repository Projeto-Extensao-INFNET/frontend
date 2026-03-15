import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUp } from '@/api/http/generated/api';
import type { SignUpDto } from '@/api/http/generated/api.schemas';
import {
  registerFormSchema,
  type RegisterFormSchema,
} from '@/shared/schemas/auth/register';

export const useRegisterModel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      birthDate: new Date(),
      documentType: 'CPF',
      document: '',
      role: 'PATIENT',
    },
  });

  const { mutateAsync: registerMutation, isPending, isError } = useSignUp();

  const onSubmit = handleSubmit(async (data: RegisterFormSchema) => {
    console.log('CHAMOU SUBMIT');
    const validatedData: SignUpDto = {
      ...data,
      birthDate: data.birthDate.toISOString(),
    };
    console.log('DADOS REGISTRO', data);
    await registerMutation({ data: validatedData });
    reset();
  });

  return { register, onSubmit, isPending, errors, isError };
};
