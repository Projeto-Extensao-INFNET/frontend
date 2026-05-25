import { LoginPage } from '@/pages/login/page';
import { createFileRoute } from '@tanstack/react-router';

// ?? [ ] => manter assim para ser a tela inicial do site? ou a de cadastro?

export const Route = createFileRoute('/')({
  component: LoginPage,
  context: () => ({ title: 'Login' }),
});
