import {
  createRootRoute,
  Outlet,
  useRouterState,
} from '@tanstack/react-router';
import { useEffect } from 'react';

// ?? [ ] => validar via useEffect ou if/else se o usuário possui token?
// ?? [ ] => se tiver ou não o token, redirecionar para as respectivas telas

const RootLayout = () => {
  // exibe dinamicamente o titulo da página
  const { matches } = useRouterState();
  const activeMatch = matches[matches.length - 1];
  const title = (activeMatch.context as { title?: string })?.title ?? ''; // garante tipagem do 'title'

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main>
      <Outlet />
    </main>
  );
};

export const Route = createRootRoute({ component: RootLayout });
