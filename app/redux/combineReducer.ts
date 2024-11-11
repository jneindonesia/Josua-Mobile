import { combineReducers } from 'redux';
import user from './user/userReducers';

const rootReducer = combineReducers({
  auth: user,
});

export default rootReducer;
