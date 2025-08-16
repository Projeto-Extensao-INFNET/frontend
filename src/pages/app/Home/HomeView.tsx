// View é onde fica toda a UI
import type { useHomeModel } from './HomeModel';

// type que define a tipagem das props baseado no retorno da Model
type HomeViewProps = ReturnType<typeof useHomeModel>;

// apenas renderiza a UI usando os dados vindos das props
// biome-ignore lint/correctness/noEmptyPattern: i'll fix this soon
export const HomeView = ({}: HomeViewProps) => {
  return (
    <div>
      <h1>Futura Página Inicial</h1>
    </div>
  );
};
