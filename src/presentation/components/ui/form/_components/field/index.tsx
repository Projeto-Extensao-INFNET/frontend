import type { FC, ReactNode } from 'react';

interface FieldProps {
  children: ReactNode;
}

export const Field: FC<FieldProps> = ({ children }) => {
  return <div className="pb-4">{children}</div>;
};
