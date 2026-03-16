import { forwardRef, type InputHTMLAttributes } from 'react';
import { ShowPassword } from '../show-password';
import { useInputModel } from './input.model';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

// forwardRef => envia a ref do input para o React Hook Form
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onFocus,
      onBlur,
      value,
      onChange,
      placeholder,
      type,
      className,
      ...props
    },
    ref,
  ) => {
    const { handlePasswordToggle, showPassword } = useInputModel();

    return (
      <div className="relative flex w-80 items-center gap-2">
        <input
          ref={ref}
          placeholder={placeholder}
          className={twMerge(
            'w-full rounded-md border border-black bg-white px-2 py-3.5',
            className,
          )}
          type={type === 'password' && showPassword ? 'text' : type}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          {...props}
        />

        {type === 'password' && (
          <ShowPassword
            onClick={handlePasswordToggle}
            showPassword={showPassword}
          />
        )}
      </div>
    );
  },
);
