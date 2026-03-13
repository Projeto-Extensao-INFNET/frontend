import type { FC } from 'react';

interface LabelProps {
  label: string | null;
}

export const Label: FC<LabelProps> = ({ label }) => {
  return (
    <div className="relative flex w-80 items-start justify-start">
      <h1 className="mb-2 font-semibold">{label}</h1>
    </div>
  );
};
