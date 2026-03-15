import type { ComponentProps, FC } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  text: string;
}

export const Button: FC<ButtonProps> = ({ type, text = '', ...props }) => {
  return (
    <div className="w-96 text-center font-bold text-white">
      <button
        type={type}
        className="h-12 w-80 rounded-lg bg-blue-400"
        {...props}
      >
        {text}
      </button>
    </div>
  );
};
