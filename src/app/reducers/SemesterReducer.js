import {GET_ALL_SEMESTRES} from '../actions/types';

const initialState = {
    allSemesters: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SEMESTRES:
            return {
                ...state,
                allSemesters: action.payload
            };
        default:
            return state;
    }
}