import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { HomePage } from '@/pages/app/Home/HomePage';
import { SignInPage } from '@/pages/auth/SignIn/SignPage';

export const RoutesPath = {
  SignIn: '/signIn',
} as const;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<HomePage />} index />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignInPage />} path={RoutesPath.SignIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
