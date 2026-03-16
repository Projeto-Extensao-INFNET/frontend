import z from 'zod';

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'O nome deve ter ao menos 3 caracteres!' })
      .max(100),
    email: z.email({ message: 'E-mail inválido' }),
    password: z
      .string()
      .min(8, { message: 'A senha deve ter ao menos 8 caracteres' }),
    confirm_password: z
      .string()
      .min(8, { message: 'A senha deve ter ao menos 8 caracteres' }),
    birthDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Data de nascimento inválida!',
    }),
    role: z.enum(['PATIENT', 'PROFESSIONAL']),
    documentType: z.enum(['CPF', 'RG']),
    document: z.string().min(11, { message: 'Documento inválido!' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não coincidem',
    path: ['confirm_password'],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
