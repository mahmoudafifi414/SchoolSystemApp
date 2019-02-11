import {GET_ALL_SEMESTRES} from "./types"
import axios from 'axios'

export const getAllSemesters = (numberPerPage) => dispatch => {
    axios.get('http://localhost:8000/api/semester' + (numberPerPage != null ? '/' + numberPerPage : '')).then(res =>
        dispatch({
            type: GET_ALL_SEMESTRES,
            payload: res.data.semesters
        })
    );
}
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_ALL_SEMESTRES,
            payload: res.data.semesters
        })
    );
}