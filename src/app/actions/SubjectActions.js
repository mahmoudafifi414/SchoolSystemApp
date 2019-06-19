import {ADD_SUBJECT, GET_ALL_SUBJECTS, GET_SUBJECTS_PAGINATION} from "./types"
import axios from 'axios'

export const addSubject = (data) => dispatch => {
    axios.post('http://localhost:8000/api/subject', data).then(res =>
        dispatch({
            type: ADD_SUBJECT,
            payload: res.data.msg
        })
    );
};
export const getSubjects = (numberPerPage = 10) => dispatch => {
    axios.get('http://localhost:8000/api/subject' + '/' + (isNaN(numberPerPage) ? '' : numberPerPage)).then(res =>
        dispatch({
            type: res.data.subjects.per_page ? GET_SUBJECTS_PAGINATION : GET_ALL_SUBJECTS,
            payload: res.data.subjects
        })
    );
};
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_ALL_SUBJECTS,
            payload: res.data.subjects
        })
    );
};