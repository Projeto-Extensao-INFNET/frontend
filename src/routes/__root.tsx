import { createRootRoute, Outlet } from '@tanstack/react-router';

// ?? [ ] => validar via useEffect ou if/else se o usuário possui token?
// ?? [ ] => se tiver ou não o token, redirecionar para as respectivas telas

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
