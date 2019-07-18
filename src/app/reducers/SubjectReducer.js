import {
    ADD_SUBJECT,
    GET_ALL_SUBJECTS,
    GET_SUBJECTS_PAGINATION,
    GET_RELATED_SUBJECT_TEACHERS,
    APPLY_TEACHERS_TO_SUBJECT, GET_YEAR_RELATIONS_DATA, GET_SUBJECT_RELATIONS_DATA
} from '../actions/types';

const initialState = {
    subjects: [],
    relationsData: [],
    subjectsPagination: [],
    relatedTeachers: [],
    msg: '',
    assignedMsg: ''
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
        case GET_SUBJECT_RELATIONS_DATA:
            return {
                ...state,
                relationsData: action.payload
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
        case APPLY_TEACHERS_TO_SUBJECT:
            return {
                ...state,
                assignedMsg: action.payload
            };
        default:
            return state;
    }
}