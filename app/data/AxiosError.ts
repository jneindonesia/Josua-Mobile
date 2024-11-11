import {
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ClientError,
  NetworkError,
  NotifyError,
} from './exceptions';
import { AxiosError, AxiosResponse, Method } from 'axios';
import { BaseResponse } from './BaseResponse';
import { isNotBlank, isNullOrUndefined } from 'app/design-system';
  
export type AxiosErrRes<T = never> = AxiosError<T> & AxiosResponse<T>;
  
export function mapAxiosErr(
  axiosErrRes?: AxiosErrRes<BaseResponse<any>>,
  notFoundProp?: NotFoundProp
): Error {
  const status = axiosErrRes?.response?.status || axiosErrRes?.status;
  const notfoundFormatted = notFoundAxiosErr(notFoundProp?.title, notFoundProp?.message);
  const data = axiosErrRes?.response?.data || axiosErrRes?.data;
  
  if (status === 401) {
    return new AuthenticationError(data?.message);
  }
  if (status === 403) {
    return new AuthorizationError();
  }
  if (status === 404) {
    return new NotFoundError(notfoundFormatted.message, '', notfoundFormatted.title);
  }
  if (axiosErrRes?.message === 'Network Error') {
    return new NetworkError();
  }
  
  if (status !== undefined && status < 500) {
    return new ClientError(
        data?.message,
        notfoundFormatted.title,
        status,
    );
  }
  
  return new NotifyError(notfoundFormatted.message, notfoundFormatted.title);
}
  
const wordingFailedByMethod = (method?: Method) => {
  if (method === 'delete') {
    return 'menghapus';
  }
  
  if (method === 'post') {
    return 'menambah';
  }
  
  if (method === 'put') {
    return 'mengubah`';
  }
  
  if (method === 'get') {
    return 'memuat';
  }
  return '';
};
  
  interface NotFoundProp {
    title?: string;
    message?: string;
  }
  
function notFoundAxiosErr(
  title: string = 'Ups ada error',
  message: string = 'Silahkan Hubungi Tim untuk informasi lebih lanjut'
): NotFoundProp {
  return {
    message: message,
    title: title,
  };
}
  
export function mapAxiosErrV2(
  axiosErrRes?: AxiosErrRes<BaseResponse<any>>,
  dataName?: string,
  notFoundProp?: NotFoundProp
): Error {
  const status = axiosErrRes?.response?.status || axiosErrRes?.status;
  const method: Method | undefined = axiosErrRes?.config.method;
  
  const data = axiosErrRes?.response?.data || axiosErrRes?.data;
  const notFoundFormatted = notFoundAxiosErr(notFoundProp?.message, notFoundProp?.title);
  const dataNotFoundFormatted = isNotBlank(dataName)
    ? `Tidak dapat ${wordingFailedByMethod(method)} ${dataName}`
    : `TIdak dapat ${wordingFailedByMethod(method)}`;
  
  if (status === 401) {
    return new AuthenticationError(data?.message);
  }
  if (status === 403) {
    return new AuthorizationError();
  }
  if (status === 404) {
    if (isNullOrUndefined(notFoundProp)) {
      return new NotFoundError(
          data?.message ?? 'Silahkan hubungi Tim untuk informasi lebih lanjut.',
          dataName ?? '',
          `Gagal ${wordingFailedByMethod(method)}`
      );
    } else {
      return new NotFoundError(notFoundFormatted.message, '', notFoundFormatted.title);
    }
  }
  if (axiosErrRes?.message === 'Network Error') {
    return new NetworkError();
  }
  
  if (status !== undefined && status < 500) {
    return new ClientError(
        data?.message,
        dataNotFoundFormatted,
        status,
    );
  }
  
  return new NotifyError(
    'Silahkan Hubungi Tim untuk informasi lebih lanjut',
    dataNotFoundFormatted,
    ' '
  );
}
  
export function mapAxiosErrToNotify(
  axiosErrRes?: AxiosErrRes<BaseResponse<any>>,
  notFoundProp?: NotFoundProp
): NotifyError {
  
  const timeout = axiosErrRes?.code;
  const status = axiosErrRes?.response?.status || axiosErrRes?.status;
  const data = axiosErrRes?.response?.data || axiosErrRes?.data;
  
  const notFoundFormatted = notFoundAxiosErr(notFoundProp?.message, notFoundProp?.title);
  
  if (status === 401) {
    return new NotifyError(
        data?.message ??
        'Untuk membutuhkan akses anda dapat menghubungi Tim untuk informasi lebih lanjut',
        'Anda tidak memiliki akses'
    );
  }
  if (status === 403) {
    return new NotifyError(
      data?.message ??
      'Untuk membutuhkan akses anda dapat menghubungi Tim untuk informasi lebih lanjut',
      'Anda tidak memiliki akses'
    );
  }
  
  if (status === 404) {
    return new NotifyError(notFoundFormatted.message, notFoundFormatted.title);
  }
  
  if (status !== undefined && status >= 400 && status < 500) {
    return new NotifyError(
        data?.message ??
        'Untuk membutuhkan akses anda dapat menghubungi Tim untuk informasi lebih lanjut',
        'Ups ada error'
    );
  }
  if (axiosErrRes?.message === 'Network Error') {
    return new NotifyError(
      'Pastikan Internet anda lancar dan cek ulang paket data, WiFI atau jaringan di tempat anda',
      'Tidak ada internet'
    );
  }
  if (timeout === 'ECONNABORTED') {
    return new NotifyError(
      'Periksa kembali koneksi jaringan Anda',
      'Request Timeout'
    );
  }
  return new NotifyError(
    'Tim kami sedang memperbaiki. Coba lagi atau kembali lagi nanti.',
    'Server mengalami gangguan'
  );
}
  
