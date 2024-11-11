import { AxiosRequestConfig } from 'axios';
import { IAuthReq } from './model/request/AuthRequest';
import { BaseResponse } from 'app/data/BaseResponse';
import { IAuthResp } from './model/response/AuthResponse';
import { post } from 'app/config/network/Networking';
import { AxiosErrRes, mapAxiosErrV2 } from 'app/data/AxiosError';
import Notify from 'app/utils/Notify';
import { ClientError, NotFoundError } from 'app/data/exceptions';

export const AuthServices = {
  login,
};

async function login(body: IAuthReq, config?: AxiosRequestConfig): Promise<IAuthResp> {
  try {
    const response = await post<BaseResponse<IAuthResp>>({
      path: 'courier/login',
      body,
      config,
    });
    
    if (response.data?.data) {
      return response.data.data;
    }
    throw new NotFoundError('Data Not Found');
    
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ClientError) {
      throw error;
    }

    const axiosErr = error as AxiosErrRes | undefined;
    const mappedErr = mapAxiosErrV2(axiosErr);
    
    Notify.sendError({
      title: 'Oopss',
      message: mappedErr.message,
    });
    
    throw mappedErr;
  }
}
