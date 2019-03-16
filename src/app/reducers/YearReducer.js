import {GET_ALL_YEARS, GET_YEAR_RELATIONS_DATA} from '../actions/types';

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
        default:
            return state;
    }
}