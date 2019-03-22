import axios from 'axios';
import {GET_CLASSROOMS} from "./types"

export const getClassrooms = () => dispatch => {
    axios.get('http://localhost:8000/api/classrooms').then(res =>
        dispatch({
            type: GET_CLASSROOMS,
            payload: res.data
        })
    );
};