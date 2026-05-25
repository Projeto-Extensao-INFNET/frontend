import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_home/home')({
  component: RouteComponent,
  context: () => ({ title: 'Home' }),
});

// TODO [ ] => criar componente para a página de Home
/**
 * Render the Home route UI that displays a greeting to the user.
 *
 * Renders a simple container with a greeting message. Intended as the component
 * wired to the `/_home/home` route.
 *
 * @returns A React element containing a greeting message for the user.
 */

function RouteComponent() {
  return <div>Hello Usuário!</div>;
}
