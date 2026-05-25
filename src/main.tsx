import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TanStackQueryProvider } from '@/integrations/tanstack-query';
import { TanStackRouterProvider } from './integrations/tanstack-router';
import { env } from '@/shared/env';
import '@styles/index.css';

const enableMSW = async () => {
  if (env.VITE_ENV === 'test') {
    const { worker } = await import('@tests/__mocks__/browser');
    return worker.start();
  }
};

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <TanStackQueryProvider>
        <TanStackRouterProvider />
      </TanStackQueryProvider>
    </StrictMode>,
  );
});
