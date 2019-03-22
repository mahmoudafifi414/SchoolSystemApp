import {GET_ALL_YEARS, GET_YEAR_RELATIONS_DATA} from "./types"
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
export const getRelationData = (yearId) => dispatch => {
    axios.get('http://localhost:8000/api/year/get-relations-data/' + yearId).then(res =>
        dispatch({
            type: GET_YEAR_RELATIONS_DATA,
            payload: res.data
        })
    );
};
export const getClassRoomsForYear = (yearId) => dispatch => {
    axios.get('http://localhost:8000/api/year/get-relations-data/' + yearId).then(res =>
        dispatch({
            type: GET_YEAR_RELATIONS_DATA,
            payload: res.data
        })
    );
}