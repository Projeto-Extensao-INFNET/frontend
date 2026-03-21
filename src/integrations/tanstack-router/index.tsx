import { routeTree } from '@/routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree });

export const TanStackRouterProvider = () => {
  return <RouterProvider router={router} />;
};

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
