import { useState } from 'react';

export const useInputModel = () => {
  const [showPassword, setShowPassword] = useState<boolean | undefined>(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return { showPassword, handlePasswordToggle };
};
