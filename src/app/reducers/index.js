import { combineReducers } from 'redux';
import PhoneReducer from './PhoneReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    phoneNumbers: PhoneReducer,
    UserReducer: UserReducer
});