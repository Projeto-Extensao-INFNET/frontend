import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@lib/react-query.ts';
import { BrowserRouter, Route, Routes } from 'react-router';
import '@styles/index.css';
import { ROUTES_PATH } from './shared/constants/routes.ts';

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
