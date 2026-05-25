import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_home/home')({
  component: RouteComponent,
  context: () => ({ title: 'Home' }),
});

// TODO [ ] => criar componente para a página de Home
// TODO [ ] => receber dados do perfil do usuário via zustand

function RouteComponent() {
  return <div>Hello Usuário!</div>;
}
