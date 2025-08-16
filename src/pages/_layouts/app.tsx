import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <div>
      {/* Futuro Header e/ou outros componentes */}
      <div>
        <Outlet /> {/* Rotas filhas do layout  */}
      </div>
      {/* Futuro Footer e/ou outros componentes*/}
    </div>
  );
};
