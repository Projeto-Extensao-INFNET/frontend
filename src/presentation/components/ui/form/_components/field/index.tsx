import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FieldProps {
  children: ReactNode;
  className?: string;
}

export const Field: FC<FieldProps> = ({ children, className }) => {
  return (
    <div className={twMerge('flex flex-col items-start pb-4', className)}>
      {children}
    </div>
  );
};
