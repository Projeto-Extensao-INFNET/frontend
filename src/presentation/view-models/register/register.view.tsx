import type { FC } from 'react';
import type { useRegisterModel } from './useRegisterModel';
import { Form } from '@/presentation/components/ui/form';
import { Button } from '@/presentation/components/ui/button';

// TODO => implementar campos que faltam no form (Data nascimento e documento)
// TODO => implementar escolha do tipo do perfil (Paciente/Profissional)

export const RegisterView: FC<ReturnType<typeof useRegisterModel>> = ({
  onSubmit,
  register,
  isPending,
  errors,
}) => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="h-156.5 w-96 rounded-md border text-center">
        <h1 className="mt-2 font-bold">Login</h1>

        <div className="mt-12">
          <Form.Container>
            <Form.Root onSubmit={onSubmit}>
              <Form.Label label="E-mail" />
              <Form.Field>
                <Form.Input
                  type="email"
                  placeholder="informe seu e-mail"
                  {...register('email')}
                />
                {errors.email && (
                  <Form.Error errorMessage={errors.email.message} />
                )}
              </Form.Field>

              <Form.Label label="Nome" />
              <Form.Field>
                <Form.Input
                  type="text"
                  placeholder="informe seu nome"
                  {...register('name')}
                />
                {errors.name && (
                  <Form.Error errorMessage={errors.name.message} />
                )}
              </Form.Field>

              <Form.Label label="Senha" />
              <Form.Field>
                <Form.Input
                  type="password"
                  placeholder="informe sua senha"
                  {...register('password')}
                />{' '}
                {errors.password && (
                  <Form.Error errorMessage={errors.password.message} />
                )}
              </Form.Field>

              <Form.Label label="Confirmar Senha" />
              <Form.Field>
                <Form.Input
                  type="password"
                  placeholder="confirme sua senha"
                  {...register('confirm_password')}
                />
                {errors.confirm_password && (
                  <Form.Error errorMessage={errors.confirm_password.message} />
                )}
              </Form.Field>
              <div className="mb-5 flex flex-col gap-3">
                <Button type="submit" text="Registrar" disabled={isPending} />
                <Button type="button" text="Já possui conta? Acessar!" />
              </div>
            </Form.Root>
          </Form.Container>
        </div>
      </div>
    </section>
  );
};
