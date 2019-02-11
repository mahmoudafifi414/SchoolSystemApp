import {GET_ALL_YEARS} from "./types"
import axios from 'axios'

export const getAllYears = (numberPerPage) => dispatch => {
    axios.get('http://localhost:8000/api/year' + (numberPerPage != null ? '/' + numberPerPage : '')).then(res =>
        dispatch({
            type: GET_ALL_YEARS,
            payload: res.data.years
        })
    );
}
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_ALL_YEARS,
            payload: res.data.semesters
        })
    );
}