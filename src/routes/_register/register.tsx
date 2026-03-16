import { Register } from '@/presentation/view-models/register';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_register/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Register />;
}
