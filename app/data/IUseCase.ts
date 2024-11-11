import { BaseResponse } from 'app/data/BaseResponse';
import { CancelToken } from 'axios';

export interface IUseCase<ResponseType> {
  cancelToken?: CancelToken;
  onSuccess: (data?: Partial<BaseResponse<ResponseType>>) => void;
  onError: (error: Error) => void;
  onComplete: () => void;
}
