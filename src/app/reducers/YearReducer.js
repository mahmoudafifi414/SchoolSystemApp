import {
    ADD_CLASSROOM_TO_YEAR,
    DETACH_CLASSROOM_FROM_YEAR,
    GET_ALL_YEARS, GET_ALL_YEARS_PAGINATION,
    GET_YEAR_RELATIONS_DATA
} from '../actions/types';
import update from 'react-addons-update';

const initialState = {
    yearsPagination: [],
    years: [],
    relationsData: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_YEARS_PAGINATION:
            return {
                ...state,
                yearsPagination: action.payload
            };
        case GET_ALL_YEARS:
            return {
                ...state,
                years: action.payload
            };
        case GET_YEAR_RELATIONS_DATA:
            return {
                ...state,
                relationsData: action.payload
            };
        case ADD_CLASSROOM_TO_YEAR:
            return update(state, {
                relationsData: {
                    data: {
                        classrooms: {
                            $push: typeof action.payload.length === 'undefined' && state.relationsData.data.classrooms.some(obj => obj.id === action.payload.id) == false
                                ? [action.payload]
                                : typeof action.payload.length !== 'undefined' ? [...action.payload] : []
                        }
                    }
                }
            });
        case DETACH_CLASSROOM_FROM_YEAR:

            return update(state, {
                relationsData: {
                    data: {
                        classrooms: {
                            $set:
                                typeof action.payload.data != 'object' ?
                                    state.relationsData.data.classrooms.filter(classroom => classroom.id != action.payload.data) :
                                    []
                        }
                    }
                }
            });
        default:
            return state;
    }
}