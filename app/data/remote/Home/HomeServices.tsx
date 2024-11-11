import { AxiosRequestConfig } from 'axios';
import { BaseResponse } from 'app/data/BaseResponse';
import { IPODResp } from './model/response/HomeResponse';
import { get } from 'app/config/network/Networking';
import { ClientError, NotFoundError } from 'app/data/exceptions';
import { AxiosErrRes, mapAxiosErr } from 'app/data/AxiosError';

export const HomeServices = {
  getListPod,
};

async function getListPod(config?: AxiosRequestConfig): Promise<IPODResp[]> {
  try {
    const response = await get<BaseResponse<IPODResp[]>>({
      path: '/pod/status',
      config,
    });
    
    if (response.data?.data !== undefined && Array.isArray(response.data?.data) && response.data?.data.length > 0) {
      return response.data.data;
    }
    throw new NotFoundError('Data Not Found');
    
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ClientError) {
      throw error;
    }
    const axiosErr = error as AxiosErrRes | undefined;
    const mappedErr = mapAxiosErr(axiosErr);
    throw mappedErr;
  }
}
