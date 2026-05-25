import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { client } from '@/lib/query-client';

export const TanStackQueryClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
