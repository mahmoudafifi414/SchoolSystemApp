import axios from 'axios';
import {GET_AUTH_USER_INFO, GET_USERS_OF_SAME_NETWORK, LOGIN, LOGOUT, REGISTER, UPDATE_AUTH_USER_INFO} from './types';

export const loginAction = loginInfo => dispatch => {
    axios.post('http://127.0.0.1:8000/api/login', loginInfo).then((res) => {
            //console.log(res.data.userData)
            if (res.data.hasOwnProperty('access_token')) {
                localStorage.setItem('user-id', res.data.userData.id)
                localStorage.setItem('user-token', res.data.access_token)
                localStorage.setItem('user-refresh-token', res.data.refresh_token)
                localStorage.setItem('user-email', res.data.userData.email)
                localStorage.setItem('user-name', res.data.userData.name)
            }
            return res
        }
    ).then(res =>
        dispatch({
            type: LOGIN,
            payload: res.data
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
export const getUsersOfSameNetwork = (numberPerPage) => dispatch => {
    axios.get('http://127.0.0.1:8000/api/users' + (numberPerPage != null ? '/' + numberPerPage : '')).then(res =>
        dispatch({
            type: GET_USERS_OF_SAME_NETWORK,
            payload: res.data.users
        })
    );
}
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_USERS_OF_SAME_NETWORK,
            payload: res.data.users
        })
    );
}
export const logoutAction = () => dispatch => {
    localStorage.removeItem('user-id')
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-refresh-token')
    localStorage.removeItem('user-email')
    localStorage.removeItem('user-name')
    dispatch({
        type: LOGOUT,
        payload: ''
    })
};
