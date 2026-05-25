import type { FC } from 'react';

interface LabelProps {
  label: string | null;
}

export const Label: FC<LabelProps> = ({ label }) => {
  return (
    <div className="flex w-80 items-start justify-start">
      <h1 className="font-semibold">{label}</h1>
    </div>
  );
};
