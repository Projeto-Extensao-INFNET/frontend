// Enum que define os métodos HTTP
export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

// Tipo genérico para requisições HTTP
export type HttpRequest<TBody> = {
  endpoint: string; // endpoint da API (ex: /users)
  method: HttpMethod; // método HTTP (ex: GET,POST etc)
  body?: TBody; // Body da requisição (opcional)
  headers?: Record<string, string>; // Headers da requisição (opcional)
};

// Interface que define o contrato do HttpClient
export interface IHttpClient {
  // método para enviar requisições
  request: <TResponse, TBody = unknown>(
    request: HttpRequest<TBody>
  ) => Promise<TResponse>;
}
