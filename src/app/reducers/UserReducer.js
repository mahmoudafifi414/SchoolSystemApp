import {GET_AUTH_USER_INFO, LOGIN, LOGOUT, REGISTER, UPDATE_AUTH_USER_INFO} from '../actions/types';

const initialState = {
    authUserInfo: '',
    updatedAuthUserInfo: 'no',
    message: '',
    auth: 'no',
    email: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                message: action.payload.meta.message,
                auth: action.payload.meta.auth,
                authUserInfo: action.payload.hasOwnProperty('userData') ? action.payload.userData : '',
                email: action.payload.hasOwnProperty('userData') ? action.payload.userData.email : ''
            };
        case REGISTER:
            return {
                ...state,
                message: action.payload.message,
            };
        case UPDATE_AUTH_USER_INFO:
            return {
                ...state,
                authUserInfo: action.payload.collection,
                updatedAuthUserInfo: action.payload.updated
            };
        case GET_AUTH_USER_INFO:
            return {
                ...state,
                authUserInfo: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                auth: 'no',
            };
        default:
            return state;
    }
}