import type { ReactNode } from 'react';
import { TanStackQueryClientProvider } from './providers/query-client-provider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <TanStackQueryClientProvider>{children}</TanStackQueryClientProvider>;
};
