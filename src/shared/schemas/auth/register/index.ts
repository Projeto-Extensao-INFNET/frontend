import z from 'zod';

export const registerFormSchema = z
  .object({
    name: z.string().nonempty().min(3).max(100),
    email: z.email().nonempty(),
    password: z.string().nonempty().min(8),
    confirm_password: z.string().nonempty().min(8),
    birthDate: z.date(),
    role: z.enum(['PATIENT', 'PROFESSIONAL', 'ADMIN']),
    documentType: z.enum(['CPF', 'RG']),
    document: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não coincidem',
    path: ['confirm_password'],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
