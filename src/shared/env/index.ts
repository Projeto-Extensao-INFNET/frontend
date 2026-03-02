import { loadEnvFile } from 'node:process';
import { z } from 'zod';

loadEnvFile('.env');

const envSchema = z.object({
  VITE_ENV: z
    .enum(['test', 'e2e', 'development', 'production'])
    .default('development'),
});

const _env = envSchema.safeParse(import.meta.env as unknown);

if (_env.success === false) {
  if (import.meta.env.DEV) {
    console.error('❌ Erro ao validar variáveis de ambiente!');
  }
  throw new Error('❌ Variáveis de ambiente inválidas!');
}

export const env = _env.data;
