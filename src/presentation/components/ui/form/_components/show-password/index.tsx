import type { FC } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

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
        <Eye size={20} color="black" />
      ) : (
        <EyeClosed size={20} color="black" height={20} />
      )}
    </button>
  );
};
