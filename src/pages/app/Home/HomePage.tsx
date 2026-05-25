// a page é o ViewModel (UI + lógica)
import { useHomeModel } from './HomeModel';
import { HomeView } from './HomeView';

export const HomePage = () => {
  // Executa o Model e pega os dados/métodos
  const methods = useHomeModel();

  return <HomeView {...methods} />;
};
