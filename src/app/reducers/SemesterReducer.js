import {GET_ALL_SEMESTRES, GET_SEMESTERS_PAGINATION} from '../actions/types';

const initialState = {
    semesters: [],
    semestersPagination: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SEMESTERS_PAGINATION:
            return {
                ...state,
                semestersPagination: action.payload
            };
        case GET_ALL_SEMESTRES:
            return {
                ...state,
                semesters: action.payload
            };
        default:
            return state;
    }
}