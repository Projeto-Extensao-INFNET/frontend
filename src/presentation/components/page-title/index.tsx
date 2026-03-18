import type { FC, ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <div className="absolute top-11.75 left-12.75 leading-6">
      <h1>{children}</h1>
    </div>
  );
};
