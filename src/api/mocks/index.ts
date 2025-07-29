import { setupWorker } from 'msw/browser';
import { env } from '@/config/env';

export const worker = setupWorker();

export const enableMSW = async () => {
  if (env.VITE_ENV !== 'test') {
    return;
  }
  await worker.start();
};
