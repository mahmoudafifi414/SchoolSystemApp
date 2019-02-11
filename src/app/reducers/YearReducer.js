import {GET_ALL_YEARS} from '../actions/types';

const initialState = {
    allyears: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_YEARS:
            return {
                ...state,
                allyears: action.payload
            };
        default:
            return state;
    }
}