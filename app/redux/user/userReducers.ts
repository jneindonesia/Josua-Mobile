import { IAuthResp } from 'app/data/remote/Auth/model/response/AuthResponse';

export enum Types {
    SET_AUTH = 'SET_AUTH'
}

export type UserState = {
    user: IAuthResp
}

export type UserAction = {
    type: Types;
    payload: IAuthResp;
}

const initialState: UserState = {
  user: {
    courier_id: '',
    courier_name: '',
    courier_password: '',
    courier_phone: null,
    courier_email: null,
    courier_nik: null,
    courier_regional: '',
    courier_branch: '',
    courier_zone: '',
    courier_origin: '',
    courier_active: 0,
    courier_sp_value: '',
    courier_incentive_group: '',
    courier_armada: '',
    courier_employee_status: null,
    courier_created_at: '',
    courier_updated_at: '',
    courier_role_id: '',
    courier_level: null,
    team_id: null,
    verified: false,
    access_token: '',
  },
};

function userReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
  case Types.SET_AUTH:
    return {
      user: action.payload as IAuthResp,
    };
  default:
    return state;
  }
}

export const selectProfile = (state: { auth: UserState }) => state.auth;

export default userReducer;
