import { LoginPage } from '@/pages/login/page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_login/login')({
  component: LoginPage,
  context: () => ({ title: 'Login' }),
});
