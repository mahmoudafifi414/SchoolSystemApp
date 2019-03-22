import {GET_CLASSROOMS} from "../actions/types"
const initialState = {
    classrooms:[]
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSROOMS:
            return {
                ...state,
                classrooms: action.payload
            };
        default:
            return state;
    }
}