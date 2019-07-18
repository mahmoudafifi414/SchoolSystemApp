import {
    ADD_CLASSROOM_TO_YEAR,
    ADD_SEMESTER_TO_YEAR,
    ADD_YEAR,
    DETACH_CLASSROOM_FROM_YEAR,
    DETACH_SEMESTER_FROM_YEAR,
    GET_ALL_YEARS,
    GET_ALL_YEARS_PAGINATION,
    GET_YEAR_RELATIONS_DATA
} from "./types"
import axios from 'axios'

export const addYear = (data) => dispatch => {
    axios.post('http://localhost:8000/api/year', data).then(res => {
            dispatch({
                type: ADD_YEAR,
                payload: res.data.msg
            })
        }
    );
};
export const getAllYears = (numberPerPage = 10) => dispatch => {
    axios.get('http://localhost:8000/api/year' + '/' + (isNaN(numberPerPage) ? '' : numberPerPage)).then(res => {
            dispatch({
                type: res.data.years.per_page ? GET_ALL_YEARS_PAGINATION : GET_ALL_YEARS,
                payload: res.data.years
            })
        }
    );
}
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_ALL_YEARS_PAGINATION,
            payload: res.data.years
        })
    );
};
export const getRelationData = (yearId) => dispatch => {
    axios.get('http://localhost:8000/api/year/get-relations-data/' + yearId).then(res =>
        dispatch({
            type: GET_YEAR_RELATIONS_DATA,
            payload: res.data
        })
    );
};
export const addClassroomToYear = (data) => dispatch => {
    axios.post('http://localhost:8000/api/year/attach-classroom', data).then(res =>
        dispatch({
            type: ADD_CLASSROOM_TO_YEAR,
            payload: res.data.data
        })
    );
};
export const removeClassroomFromYear = (data) => dispatch => {
    axios.post('http://localhost:8000/api/year/detach-classroom', data).then(res =>
        dispatch({
            type: DETACH_CLASSROOM_FROM_YEAR,
            payload: res.data
        })
    );
};
export const addSemesterToYear = (data) => dispatch => {
    axios.post('http://localhost:8000/api/year/attach-semester', data).then(res =>
        dispatch({
            type: ADD_SEMESTER_TO_YEAR,
            payload: res.data.data
        })
    );
};
export const removeSemesterFromYear = (data) => dispatch => {
    axios.post('http://localhost:8000/api/year/detach-semester', data).then(res =>
        dispatch({
            type: DETACH_SEMESTER_FROM_YEAR,
            payload: res.data
        })
    );
};
