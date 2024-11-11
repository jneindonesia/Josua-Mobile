import { IAuthResp } from 'app/data/remote/Auth/model/response/AuthResponse';
import { Types, UserAction } from './userReducers';

export function setAuth(payload: IAuthResp): UserAction {
  return {
    type: Types.SET_AUTH,
    payload,
  };
}
