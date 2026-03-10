import {
  type HttpMethod,
  type HttpRequest,
  type IHttpClient,
} from './http-client.types';
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';
import { INTERNAL_SERVER_ERROR } from '@/shared/constants/errors';
import { env } from '@/shared/env';

const BASE_URL = env.VITE_BASE_URL;

// HTTP client customizado
export class httpClient implements IHttpClient {
  public api: AxiosInstance;

  public constructor() {
    this.api = axios.create({ baseURL: BASE_URL });
    this.setupInterceptors();
  }

  public setupInterceptors() {
    this.api.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

        return config;
      },
      (error) => Promise.reject(error),
    );
  }

  async request<TResponse, TBody = unknown>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = props;

    try {
      const { data } = await this.api.request<TResponse>({
        url: endpoint,
        method,
        data: body,
        headers,
      });
      return data;
    } catch (err) {
      const error = err as AxiosError;
      console.error('HTTP ERROR', {
        message: error.message,
        code: error.code,
        response: error.response,
        config: error.config,
      });
      const status = error.response?.status || INTERNAL_SERVER_ERROR;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}

// Instância única para reutilização
const client = new httpClient();

// Função para o Orval usar o HTTP client customizado.
export const orvalHttpClient = async <TResponse, TBody = unknown>(
  config: AxiosRequestConfig,
): Promise<TResponse> => {
  const method = (config.method ?? 'get').toLowerCase() as HttpMethod;

  const request: HttpRequest<TBody> = {
    endpoint: String(config.url ?? env.VITE_BASE_URL),
    method,
    body: config.data as TBody,
    headers: config.headers as Record<string, string> | undefined,
  };

  return client.request<TResponse, TBody>(request);
};
