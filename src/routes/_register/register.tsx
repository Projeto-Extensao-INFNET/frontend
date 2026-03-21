import { RegisterPage } from '@/pages/register/page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_register/register')({
  component: RegisterPage,
  context: () => ({
    title: 'Cadastro',
  }),
});
