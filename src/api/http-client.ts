import axios, { type AxiosError, type AxiosInstance } from 'axios';
import type { HttpRequest, IHttpClient } from './http-client.types';
import { INTERNAL_SERVER_ERROR } from '@/shared/constants/errors';

export const BASE_URL = process.env.BASE_URL;

export class HttpClient implements IHttpClient {
  private api: AxiosInstance; // instancia isolada do axios

  private constructor() {
    this.api = axios.create({ baseURL: BASE_URL });
  }

  static create() {
    return new HttpClient();
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

  // client  HTTP responsável pelas requisições ao backend
  async request<TResponse, TBody = unknown>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = props;

    try {
      const { data } = await this.api.request<TResponse>({
        url: endpoint, // BASE_URL já vem por padrão (pelo this.api), passa apenas os endpoints
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
