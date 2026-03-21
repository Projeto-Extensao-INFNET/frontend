import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TanStackQueryProvider } from '@/shared/integrations/tanstack-query/index.tsx';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { env } from '@shared/env';
import '@styles/index.css';
import { routeTree } from './routeTree.gen.ts';

const enableMSW = async () => {
  if (env.VITE_ENV === 'test') {
    const { worker } = await import('@mocks/browser.ts');

    return worker.start();
  }
};

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <TanStackQueryProvider>
        <RouterProvider router={router} />
      </TanStackQueryProvider>
    </StrictMode>,
  );
});
