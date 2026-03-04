import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@lib/react-query.ts';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ROUTES_PATH } from '@shared/constants/routes.ts';
import { env } from '@shared/env';
import '@styles/index.css';
import { App } from './App.tsx';

const enableMSW = async () => {
  if (env.VITE_ENV === 'test') {
    const { worker } = await import('./__mocks__/browser.ts');

    return worker.start();
  }
};

enableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES_PATH.BASE} element={<App />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>,
  );
});
