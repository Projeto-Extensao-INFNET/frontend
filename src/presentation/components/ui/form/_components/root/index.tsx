import type { ComponentProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface RootProps extends ComponentProps<'form'> {
  children: ReactNode;
}

export const Root: FC<RootProps> = ({
  children,
  className,
  onSubmit,
  ...props
}) => {
  return (
    <form
      className={twMerge(
        className,
        'flex flex-col items-center justify-center',
      )}
      {...props}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
