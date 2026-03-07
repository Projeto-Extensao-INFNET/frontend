import type { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export function CustomRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { ...options, wrapper: Wrapper });
}

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { CustomRender as render };
