import axios from 'axios';
import {GET_CLASSROOMS, GET_CLASSROOMS_PAGINATION,GET_RELATED_YEARS} from "./types"

export const getClassrooms = (numberPerPage = 10) => dispatch => {
    axios.get('http://localhost:8000/api/classroom' + '/' + (isNaN(numberPerPage) ? '' : numberPerPage)).then(res =>
        dispatch({
            type: res.data.classrooms.per_page ? GET_CLASSROOMS_PAGINATION : GET_CLASSROOMS,
            payload: res.data.classrooms
        })
    );
};
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_CLASSROOMS_PAGINATION,
            payload: res.data.classrooms
        })
    );
};
export const getRelatedYears = (classroomId) => dispatch => {
    axios.get('http://localhost:8000/api/classroom/get-related-years/' + classroomId).then(res => {
        dispatch({
            type: GET_RELATED_YEARS,
            payload: res.data.data
        })
    });
};