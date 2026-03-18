import { Login } from '@/presentation/view-models/login';
import { createFileRoute } from '@tanstack/react-router';

// ?? [ ] => manter assim para ser a tela inicial do site? ou a de cadastro?

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
