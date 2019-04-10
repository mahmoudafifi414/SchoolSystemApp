import {GET_ALL_SEMESTRES,GET_SEMESTERS_PAGINATION} from "./types"
import axios from 'axios'

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
}