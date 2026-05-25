import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import type { HttpRequest, IHttpClient } from './HttpClientContract';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// implementação usando o Axios
export class HttpClient implements IHttpClient {
  private constructor(private api: AxiosInstance = axios) {}

  // método para enviar as requisições HTTP
  async request<TResponse, TBody>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = props;

    try {
      // executa a requisição HTTP com o Axios
      const { data } = await this.api.request<TResponse>({
        url: `${BASE_URL}${endpoint}`, // monta a URL completa
        method,
        headers,
        data: body,
      });

      return data; // retorna a resposta da requisição HTTP
    } catch (err) {
      // Em caso de erro lança um erro com status e mensagem
      const error = err as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}
