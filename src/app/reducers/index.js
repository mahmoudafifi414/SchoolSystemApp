import {combineReducers} from 'redux';
import PhoneReducer from './PhoneReducer';
import UserReducer from './UserReducer';
import SemesterReducer from "./SemesterReducer";
import YearReducer from "./YearReducer";
import ComponentRendererReducer from "./ComponentRendererReducer";
import ClassroomsReducer from "./ClassroomsReducer";

export default combineReducers({
    phoneNumbers: PhoneReducer,
    UserReducer: UserReducer,
    SemesterReducer: SemesterReducer,
    YearsReducer: YearReducer,
    ClassroomsReducer:ClassroomsReducer,
    ComponentRendererReducer: ComponentRendererReducer
});