import type { FC, InputHTMLAttributes } from 'react';
import { ShowPassword } from '../show-password';
import { useInputModel } from '../../input.model';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({
  className,
  onFocus,
  onBlur,
  value,
  onChange,
  placeholder,
  type,
  ...props
}) => {
  const { handlePasswordToggle, showPassword } = useInputModel();
  return (
    <div className="relative flex w-80 items-center gap-2">
      <input
        placeholder={placeholder}
        className="w-full rounded-md border border-black bg-white px-2 py-3.5"
        type={type === 'password' && showPassword ? 'text' : type}
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
};
