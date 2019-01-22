import axios from 'axios';
import {
    ADD_POST,
    CHECK_EXISTENCE,
    DELETE_CONTACT,
    EDIT_CONTACT,
    GET_CONTACTS,
    GET_POSTS,
    DELETE_POST,
    SEARCH_CONTACTS,
    SHOW_HIDE_CHATLIST,
    SHOW_HIDE_CONTACTS,
    SHOW_HIDE_FORM,
    SHOW_HIDE_PERSONAL_DETAILS,
    SHOW_HIDE_SEARCH,
    UPDATE_CONTACT
} from './types';

export const getContacts = data => dispatch => {
    axios.post('http://localhost:3000/api/contacts', data).then((res) => {
            return res
        }
    ).then(res =>
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        })
    );
};
export const getPosts = () => dispatch => {
    axios.get('http://localhost:8000').then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        })
    })
};
export const deletePost = (id) => dispatch => {
    axios.delete('http://localhost:8000/' + id).then(res => {
        dispatch({
            type: DELETE_POST,
            payload: res.data.id,
        })
    })
}
export const addContact = (contact, socket) => dispatch => {
    axios.post('http://localhost:3000/api/contacts/add', contact).then(res => {
        socket.emit('add-contact', {number: contact.phoneNumber})
        dispatch({
            type: ADD_CONTACT,
            payload: res.data.collection,
        })
    })
};
export const addPost = (postData) => dispatch => {
    axios.post('http://localhost:8000', postData).then(res => {
        dispatch({
            type: ADD_POST,
            payload: res.data.postData,
        })
    })
};
export const deleteContact = data => dispatch => {
    axios.post('http://localhost:3000/api/contacts/delete', data).then(res =>
        dispatch({
            type: DELETE_CONTACT,
            payload: data.contactId
        })
    );
};
export const editContact = contactId => dispatch => {
    axios.get('http://localhost:3000/api/contacts/edit/' + contactId).then(res =>
        dispatch({
            type: EDIT_CONTACT,
            payload: res.data
        })
    );
};
export const updateContact = contactId => dispatch => {
    axios.get('http://localhost:3000/api/contacts/update/' + contactId).then(res =>
        dispatch({
            type: UPDATE_CONTACT,
            payload: contactId
        })
    );
};
export const showHideContacts = (flag) => {
    return {
        type: SHOW_HIDE_CONTACTS,
        payload: flag
    };
};
export const showHideForm = (flag) => {
    return {
        type: SHOW_HIDE_FORM,
        payload: flag
    };
};
export const showHideSearch = (flag) => {
    return {
        type: SHOW_HIDE_SEARCH,
        payload: flag
    };
};
export const showHidePersonalDetails = (flag) => {
    return {
        type: SHOW_HIDE_PERSONAL_DETAILS,
        payload: flag
    };
};
export const showHideChatList = (flag) => {
    return {
        type: SHOW_HIDE_CHATLIST,
        payload: flag
    };
};
export const searchContacts = (value) => {
    return {
        type: SEARCH_CONTACTS,
        payload: value
    };
};
export const checkExistenceOfContact = data => dispatch => {
    axios.post('http://localhost:3000/api/contacts/checkExistenceOfContact', data).then(res =>
        dispatch({
            type: CHECK_EXISTENCE,
            payload: res.data.existence
        })
    );
}


