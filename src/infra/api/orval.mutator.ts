import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';

import { INTERNAL_SERVER_ERROR } from '@/shared/errors';

import type { HttpMethod } from './http-client.types';
import { BASE_URL } from '@/shared/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

export const OrvalMutator = async <TResponse, TBody = unknown>(
  request: AxiosRequestConfig<TBody>,
): Promise<TResponse> => {
  const { url, method, data: body, params, headers } = request;

  try {
    const { data } = await api.request<TResponse>({
      url,
      method: method as HttpMethod,
      data: body,
      params,
      headers,
    });
    return data;
  } catch (err) {
    const error = err as AxiosError;
    console.error('HTTP ERROR', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      url: error.config?.url,
      method: error.config?.method,
    });
    const status = error.response?.status || INTERNAL_SERVER_ERROR;
    const message = error.response?.data || error.message;
    throw new Error(`Request failed with status ${status}: ${message}`);
  }
};
