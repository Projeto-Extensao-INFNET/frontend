import { Form } from '@/presentation/components/form';
import { PageTitle } from '@/presentation/components/page-title';
import { Button } from '@/presentation/components/ui/button';

import type { FC } from 'react';
import type { useLoginModel } from './useLoginModel';

const texts = {
  placeholders: {
    email: 'informe seu e-mail',
    password: 'informe sua senha',
  },
  buttons: {
    access: 'Acessar',
    accessing: 'Acessando',
  },
  cta: {
    noAccount: 'Ainda não possui conta? Cadastrar!',
  },
};

export const LoginView: FC<ReturnType<typeof useLoginModel>> = ({
  register,
  isPending,
  errors,
  onSubmit,
  navigateToRegister,
}) => {
  return (
    <main>
      <PageTitle>Login</PageTitle>
      <section className="flex items-center justify-center">
        <div className="mt-12">
          <Form.Container>
            <Form.Root onSubmit={onSubmit}>
              <Form.Label label="E-mail" />
              <Form.Field>
                <Form.Input
                  type="email"
                  placeholder={texts.placeholders.email}
                  {...register('email')}
                />
                {errors.email && (
                  <Form.Error errorMessage={errors.email.message} />
                )}
              </Form.Field>

              <Form.Label label="Senha" />
              <Form.Field>
                <Form.Input
                  type="password"
                  placeholder={texts.placeholders.password}
                  {...register('password')}
                />{' '}
                {errors.password && (
                  <Form.Error errorMessage={errors.password.message} />
                )}
              </Form.Field>

              <div className="mb-5 flex h-full flex-col items-center justify-center pt-4">
                <div className="space-y-2">
                  {' '}
                  <Button
                    type="submit"
                    size={'lg'}
                    disabled={isPending}
                    className="min-w-full"
                  >
                    {isPending
                      ? `${texts.buttons.accessing}`
                      : `${texts.buttons.access}`}
                  </Button>
                  <Button
                    type="button"
                    variant={'secondary'}
                    size={'lg'}
                    className="min-w-full"
                    onClick={navigateToRegister}
                  >
                    {texts.cta.noAccount}
                  </Button>
                </div>
              </div>
            </Form.Root>
          </Form.Container>
        </div>
      </section>
    </main>
  );
};
