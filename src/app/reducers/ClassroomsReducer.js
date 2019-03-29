import {GET_CLASSROOMS, GET_CLASSROOMS_PAGINATION, GET_RELATED_YEARS} from "../actions/types"

const initialState = {
    classrooms: [],
    classroomsPagination: [],
    relatedYears: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSROOMS_PAGINATION:
            return {
                ...state,
                classroomsPagination: action.payload
            };
        case GET_CLASSROOMS:
            return {
                ...state,
                classrooms: action.payload
            };
        case GET_RELATED_YEARS:
            return {
                ...state,
                relatedYears: action.payload
            };
        default:
            return state;
    }
}