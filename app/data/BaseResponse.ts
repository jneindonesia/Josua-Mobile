export interface BaseResponse<T> {
  success?: boolean;
  code?: number;
  message?: string;
  data?: T;
}

export interface BaseListPaggedResponse<T> {
  data: T;
}
