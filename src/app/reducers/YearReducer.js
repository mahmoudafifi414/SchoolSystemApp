import {
    ADD_CLASSROOM_TO_YEAR,
    DETACH_CLASSROOM_FROM_YEAR,
    GET_ALL_YEARS,
    GET_YEAR_RELATIONS_DATA
} from '../actions/types';
import update from 'react-addons-update';

const initialState = {
    allyears: [],
    relationsData: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_YEARS:
            return {
                ...state,
                allyears: action.payload
            };
        case GET_YEAR_RELATIONS_DATA:
            return {
                ...state,
                relationsData: action.payload
            };
        case ADD_CLASSROOM_TO_YEAR:
            return update(state, {
                relationsData: {
                    data: {classrooms: {$push: [action.payload]}}
                }
            });
        case DETACH_CLASSROOM_FROM_YEAR:
            return {
                ...state,
                relationsData: action.payload
            };
        default:
            return state;
    }
}