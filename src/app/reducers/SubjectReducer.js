import {ADD_SUBJECT, GET_ALL_SUBJECTS, GET_SUBJECTS_PAGINATION, GET_RELATED_SUBJECT_TEACHERS} from '../actions/types';

const initialState = {
    subjects: [],
    subjectsPagination: [],
    relatedTeachers: [],
    msg: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SUBJECTS_PAGINATION:
            return {
                ...state,
                subjectsPagination: action.payload
            };
        case GET_ALL_SUBJECTS:
            return {
                ...state,
                subjects: action.payload
            };
        case ADD_SUBJECT:
            return {
                ...state,
                msg: action.payload
            };
        case GET_RELATED_SUBJECT_TEACHERS:
            return {
                ...state,
                relatedTeachers: action.payload
            };
        default:
            return state;
    }
}