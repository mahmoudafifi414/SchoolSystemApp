import axios from 'axios';
import {GET_AUTH_USER_INFO, LOGIN, LOGOUT, REGISTER, UPDATE_AUTH_USER_INFO} from './types';

export const loginAction = loginInfo => dispatch => {
    axios.post('http://localhost:3000/api/login', loginInfo).then((res) => {
            console.log(res)
            if (res.data.hasOwnProperty('data') && res.data.data.hasOwnProperty('token')) {
                localStorage.setItem('phone-manager-user-token', res.data.data.token)
                localStorage.setItem('phone-manager-user-id', res.data.meta.userId)
                localStorage.setItem('phone-manager-user-email', res.data.meta.userEmail)
                localStorage.setItem('phone-manager-user-phone-number', res.data.meta.mobilePhoneNumber)
            }
            return res
        }
    ).then(res =>
        dispatch({
            type: LOGIN,
            payload: res.data.meta
        })
    );

};
export const registerAction = contact => dispatch => {
    axios.post('http://localhost:3000/api/register', contact).then(res =>
        dispatch({
            type: REGISTER,
            payload: res.data
        })
    );
};
export const getAuthUserInfo = userInfoById => dispatch => {
    axios.post('http://localhost:3000/api/getAuthUserInfo', userInfoById).then(res =>
        dispatch({
            type: GET_AUTH_USER_INFO,
            payload: res.data.collection
        })
    );
};
export const updateAuthUserInfo = info => dispatch => {
    axios.post('http://localhost:3000/api/updateAuthUser', info).then(res =>
        dispatch({
            type: UPDATE_AUTH_USER_INFO,
            payload: res.data
        })
    );
};
export const logoutAction = () => dispatch => {
    localStorage.removeItem('phone-manager-user-token');
    localStorage.removeItem('phone-manager-user-email');
    localStorage.removeItem('phone-manager-user-id');
    localStorage.removeItem('phone-manager-user-phone-number');
    dispatch({
        type: LOGOUT,
        payload: ''
    })
};
