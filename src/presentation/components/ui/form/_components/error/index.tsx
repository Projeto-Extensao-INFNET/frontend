export const Error = ({ errorMessage }: { errorMessage?: string }) => {
  return <p className="text-xs text-red-500">{errorMessage}</p>;
};
