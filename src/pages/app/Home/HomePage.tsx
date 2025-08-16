// a page é o ViewModel (UI + lógica)
import { useHomeModel } from './HomeModel';
import { HomeView } from './HomeView';

// Executa o Model e pega os dados/métodos
// biome-ignore lint/correctness/useHookAtTopLevel: i'll fix this soon
const methods = useHomeModel();

export const HomePage = () => {
  // Passa todos os dados/métodos para a View via props
  return <HomeView {...methods} />;
};
