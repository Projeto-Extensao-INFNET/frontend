import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { App } from './App.tsx';
import { enableMSW } from './api/mocks/index.ts';
import { client } from './lib/react-query.ts';

enableMSW().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: mandatory by React
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
});
