import z from 'zod';

export const loginFormSchema = z.object({
  email: z.email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter ao menos 8 caracteres' }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
