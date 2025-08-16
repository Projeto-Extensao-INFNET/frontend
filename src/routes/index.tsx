import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { HomeView } from '@/pages/app/Home/HomeView';
import { SignInView } from '@/pages/auth/SignIn/SignInView';

export const RoutesPath = {
  SignIn: '/signIn',
} as const;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<HomeView />} index />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignInView />} path={RoutesPath.SignIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
