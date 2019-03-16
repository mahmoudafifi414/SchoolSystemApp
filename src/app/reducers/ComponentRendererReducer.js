import {SET_COMPONENT} from '../actions/types';

const initialState = {
    componentToRender: 'AllYears',
    componentMetaData: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_COMPONENT:
            return {
                ...state,
                componentToRender: action.payload,
                componentMetaData: action.payloadMeta
            };
        default:
            return state;
    }
}