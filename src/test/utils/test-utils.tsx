import { render } from '@testing-library/react';
import type { ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
