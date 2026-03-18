import type { FC } from 'react';
import type { useRegisterModel } from './useRegisterModel';
import { Form } from '@/presentation/components/ui/form';
import { Button } from '@/presentation/components/ui/button';
import { DatePicker } from '@/presentation/components/ui/date-picker';
import { Controller } from 'react-hook-form';
import { ACCOUNT_TYPES, DOCUMENT_TYPES } from '@/shared/constants/constants';
import { PageTitle } from '@/presentation/components/page-title';

export const RegisterView: FC<ReturnType<typeof useRegisterModel>> = ({
  onSubmit,
  register,
  isPending,
  errors,
  control,
  navigateToLogin,
}) => {
  return (
    <main>
      <PageTitle>Cadastro</PageTitle>
      <section className="flex items-center justify-center">
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

              <Form.Label label="Data de nascimento" />
              <Form.Field className="relative">
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value ? new Date(field.value) : undefined}
                      onChange={(date) => field.onChange(date?.toISOString())}
                    />
                  )}
                />
              </Form.Field>

              <Form.Label label="Tipo de conta" />
              {ACCOUNT_TYPES.map((acc) => (
                <Form.Field key={acc.id}>
                  <Form.Input
                    type="radio"
                    {...register('role')}
                    value={acc.role}
                    className=""
                  />
                  <Form.Label label={acc.value} />
                </Form.Field>
              ))}

              <Form.Label label="Tipo de documento" />
              {DOCUMENT_TYPES.map((doc) => (
                <Form.Field key={doc.id}>
                  <Form.Input
                    type="radio"
                    {...register('documentType')}
                    value={doc.value}
                    className=""
                  />
                  <Form.Label label={doc.value} />
                </Form.Field>
              ))}

              <Form.Label label="Documento" />
              <Form.Field>
                <Form.Input
                  type="text"
                  placeholder="informe seu documento"
                  {...register('document')}
                />{' '}
                {errors.document && (
                  <Form.Error errorMessage={errors.document.message} />
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

              <div className="mb-5 flex h-full flex-col items-center justify-center pt-4">
                <div className="space-y-2">
                  {' '}
                  <Button
                    type="submit"
                    size={'lg'}
                    disabled={isPending}
                    className="min-w-full"
                  >
                    {isPending ? 'Registrando...' : 'Registrar'}
                  </Button>
                  <Button
                    type="button"
                    variant={'secondary'}
                    size={'lg'}
                    className="min-w-full"
                    onClick={navigateToLogin}
                  >
                    Já possui conta? Acessar!
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
