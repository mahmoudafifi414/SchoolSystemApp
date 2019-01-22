import {
    ADD_CONTACT,
    ADD_POST,
    CHECK_EXISTENCE,
    DELETE_CONTACT,
    DELETE_POST,
    EDIT_CONTACT,
    GET_CONTACTS,
    GET_POSTS,
    SEARCH_CONTACTS,
    SHOW_HIDE_CHATLIST,
    SHOW_HIDE_CONTACTS,
    SHOW_HIDE_FORM,
    SHOW_HIDE_PERSONAL_DETAILS,
    SHOW_HIDE_SEARCH,
    UPDATE_CONTACT
} from '../actions/types';

const initialState = {
    contacts: [],
    searchedContacts: [],
    showHide: 'hide',
    showHideSearch: 'hide',
    showHidePersonalDetails: 'hide',
    showHideContacts: 'show',
    showHideChatList: 'hide',
    currentContact: '',
    contactExist: 'no',
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                searchedContacts: action.payload,
                contacts: action.payload,
            };
        case SHOW_HIDE_FORM:
            return {
                ...state,
                showHide: action.payload
            };
        case SHOW_HIDE_SEARCH:
            return {
                ...state,
                showHideSearch: action.payload
            };
        case SHOW_HIDE_PERSONAL_DETAILS:
            return {
                ...state,
                showHidePersonalDetails: action.payload
            };
        case SHOW_HIDE_CONTACTS:
            return {
                ...state,
                showHideContacts: action.payload
            };
        case SHOW_HIDE_CHATLIST:
            return {
                ...state,
                showHideChatList: action.payload
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                searchedContacts: [action.payload, ...state.searchedContacts],
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.payload)
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)
            };
        case EDIT_CONTACT:
            return {
                ...state,
                currentContact: action.payload
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)
            };
        case SEARCH_CONTACTS:
            return {
                ...state,
                contacts: state.searchedContacts.filter(contact => contact.contacted_user.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
            };
        case CHECK_EXISTENCE:
            return {
                ...state,
                contactExist: action.payload
            };
        default:
            return state;
    }
}