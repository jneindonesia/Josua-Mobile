import { AxiosRequestConfig, AxiosResponse } from 'axios';
import HttpClient from './HttpClient';

type GetParams = {
  path: string;
  params?: any;
  headers?: any;
  config?: AxiosRequestConfig;
};

type PostParams = {
  path: string;
  params?: any;
  body?: any;
  headers?: any;
  config?: AxiosRequestConfig;
};

export async function get<T>({ path, headers, params, config }: GetParams): Promise<AxiosResponse<T>> {
  return HttpClient.get<T>(path, { headers: { ...headers }, params, ...config });
}

export async function post<T>({ path, headers, params, body, config }: PostParams): Promise<AxiosResponse<T>> {
  return HttpClient.post<T>(path, body, { headers: { ...headers }, params, ...config });
}

export async function put<T>({ path, headers, body, params, config }: PostParams): Promise<AxiosResponse<T>> {
  return HttpClient.put<T>(path, body, { headers: { ...headers }, params, ...config });
}

export async function remove<T>({ path, headers, config }: PostParams): Promise<AxiosResponse<T>> {
  return HttpClient.delete<T>(path, { headers: { ...headers }, ...config });
}
