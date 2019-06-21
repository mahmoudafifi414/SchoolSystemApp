import {ADD_SEMESETR, GET_ALL_SEMESTRES, GET_SEMESTERS_PAGINATION,ATTACH_SUBJECT_TO_SEMESTER} from "./types"
import axios from 'axios'

export const addSemester = (data) => dispatch => {
    axios.post('http://localhost:8000/api/semester', data).then(res =>
        dispatch({
            type: ADD_SEMESETR,
            payload: res.data.msg
        })
    );
};
export const getSemesters = (numberPerPage = 10) => dispatch => {
    axios.get('http://localhost:8000/api/semester' + '/' + (isNaN(numberPerPage) ? '' : numberPerPage)).then(res =>
        dispatch({
            type: res.data.semesters.per_page ? GET_SEMESTERS_PAGINATION : GET_ALL_SEMESTRES,
            payload: res.data.semesters
        })
    );
};
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_ALL_SEMESTRES,
            payload: res.data.semesters
        })
    );
};