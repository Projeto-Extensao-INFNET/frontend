import type { FC } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface ShowPasswordProps {
  onClick: () => void;
  showPassword: boolean | undefined;
}

export const ShowPassword: FC<ShowPasswordProps> = ({
  onClick,
  showPassword,
}) => {
  return (
    <button
      type="button"
      className="absolute top-1/2 right-2 -translate-y-1/2"
      onClick={onClick}
    >
      {showPassword ? (
        <FaEye size={20} color="black" />
      ) : (
        <FaEyeSlash size={20} color="black" height={20} />
      )}
    </button>
  );
};
