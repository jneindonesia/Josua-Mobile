import { store } from 'app/redux/configureStore';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const AuthInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { user } = store.getState().auth;
  
  const accessToken = user.access_token;

  if (config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  
  return config;
};

const ErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  switch (error?.response?.status) {
  case 400:
    return Promise.reject(error);
  default:
    return Promise.reject(error);
  }
};

// Interceptor for responses
const ResponseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export { AuthInterceptor, ErrorInterceptor, ResponseInterceptor };
