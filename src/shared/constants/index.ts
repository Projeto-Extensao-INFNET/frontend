import { env } from '../env';

export const ACCOUNT_TYPES = [
  { id: 1, role: 'PATIENT', value: 'Paciente' },
  { id: 2, role: 'PROFESSIONAL', value: 'Profissional' },
];

export const DOCUMENT_TYPES = [
  { id: 1, value: 'CPF' },
  { id: 2, value: 'RG' },
];

export const BASE_URL = env.VITE_BASE_API_URL;
