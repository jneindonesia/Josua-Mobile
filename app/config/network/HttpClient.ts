import axios from 'axios';
import { API_BASE_URL } from '@env';
import { AuthInterceptor, ErrorInterceptor, ResponseInterceptor } from './Interceptors';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    applicationType: 'app',
  },
});

httpClient.interceptors.request.use(AuthInterceptor);
httpClient.interceptors.response.use(ResponseInterceptor, ErrorInterceptor);

export default httpClient;
