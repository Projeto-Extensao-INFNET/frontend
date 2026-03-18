import { Login } from '@/presentation/view-models/login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_login/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
