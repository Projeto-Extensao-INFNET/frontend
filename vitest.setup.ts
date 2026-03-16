import '@testing-library/jest-dom';
import { beforeAll, afterAll, afterEach, beforeEach } from 'vitest';
import { cleanup } from './src/__tests__/custom-render';
import { server } from './src/__mocks__/node';

beforeEach(() => cleanup());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
