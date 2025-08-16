import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';

export const RoutesPath = {} as const;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route element={<DashboardView} index/> */}{' '}
          {/* Futura página inicial */}
        </Route>

        <Route element={<AuthLayout />}>
          {/* <Route element={<SignInView/>} path={RoutesPath.signIn}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
