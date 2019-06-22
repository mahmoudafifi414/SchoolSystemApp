import axios from 'axios';
import {
    GET_CLASSROOMS, GET_CLASSROOMS_PAGINATION, GET_RELATED_YEARS, GET_RELATED_FILTER_DATA,
    GET_CLASROOM_RELATIONS_DATA, GET_RELATED_SEMESTER, GET_RELATED_SUBJECTS, ATTACH_SUBJECT_TO_SEMESTER,DETACH_SUBJECT_TO_SEMESTER
} from "./types"

export const getClassrooms = (numberPerPage = 10) => dispatch => {
    axios.get('http://localhost:8000/api/classroom' + '/' + (isNaN(numberPerPage) ? '' : numberPerPage)).then(res =>
        dispatch({
            type: res.data.classrooms.per_page ? GET_CLASSROOMS_PAGINATION : GET_CLASSROOMS,
            payload: res.data.classrooms
        })
    );
};
export const updatePaginationData = (apiLink, paginationNumber) => dispatch => {
    axios.get(apiLink + '?page=' + paginationNumber).then(res =>
        dispatch({
            type: GET_CLASSROOMS_PAGINATION,
            payload: res.data.classrooms
        })
    );
};
export const getRelationData = (classroomId) => dispatch => {
    axios.get('http://localhost:8000/api/classroom/get-relations-data/' + classroomId).then(res =>
        dispatch({
            type: GET_CLASROOM_RELATIONS_DATA,
            payload: res.data
        })
    );
};
export const getRelatedYears = (classroomId) => dispatch => {
    axios.get('http://localhost:8000/api/classroom/get-related-years/' + classroomId).then(res => {
        dispatch({
            type: GET_RELATED_YEARS,
            payload: res.data.data
        })
    });
};
export const getRelatedSemesters = (classroomId) => dispatch => {
    axios.get('http://localhost:8000/api/classroom/get-related-semesters/' + classroomId).then(res => {
        dispatch({
            type: GET_RELATED_SEMESTER,
            payload: res.data.data
        })
    });
};
export const getRelatedSubjects = (classroomId, yearId) => dispatch => {
    axios.get('http://localhost:8000/api/classroom/get-related-subjects/' + classroomId + '/' + yearId).then(res => {
        dispatch({
            type: GET_RELATED_SUBJECTS,
            payload: res.data.data
        })
    });
};
export const getRelatedFilterData = (data) => dispatch => {
    axios.post('http://localhost:8000/api/classroom/get-display-option-data', data).then(res => {
        dispatch({
            type: GET_RELATED_FILTER_DATA,
            payload: res.data.data
        })
    });
};
export const attachSubjectToSemester = (data) => dispatch => {
    axios.post('http://localhost:8000/api/classroom/attachSubjectToSemester', data).then(res =>
        dispatch({
            type: ATTACH_SUBJECT_TO_SEMESTER,
            payload: res.data.data
        })
    );
};
export const detachSubjectToSemester = (data) => dispatch => {
    axios.post('http://localhost:8000/api/classroom/detachSubjectToSemester', data).then(res =>
        dispatch({
            type: DETACH_SUBJECT_TO_SEMESTER,
            payload: res.data.data
        })
    );
};