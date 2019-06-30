import {
    GET_CLASSROOMS,
    GET_CLASSROOMS_PAGINATION,
    GET_RELATED_FILTER_DATA,
    GET_RELATED_YEARS,
    GET_CLASROOM_RELATIONS_DATA,
    GET_RELATED_SEMESTER,
    GET_RELATED_SUBJECTS,
    ATTACH_SUBJECT_TO_SEMESTER,
    DETACH_SUBJECT_FROM_SEMESTER, DETACH_CLASSROOM_FROM_YEAR,
    DETACH_TEACHER_FROM_CLASSROOM
} from "../actions/types"
import update from "react-addons-update";
import {arr_diff} from "../Helpers";

const initialState = {
    classrooms: [],
    classroomsPagination: [],
    relatedYears: [],
    relatedSemesters: [],
    relatedSubjects: [],
    filteredData: [],
    relationsData: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSROOMS_PAGINATION:
            return {
                ...state,
                classroomsPagination: action.payload
            };
        case GET_CLASSROOMS:
            return {
                ...state,
                classrooms: action.payload
            };
        case GET_RELATED_YEARS:
            return {
                ...state,
                relatedYears: action.payload
            };
        case GET_CLASROOM_RELATIONS_DATA:
            return {
                ...state,
                relationsData: action.payload
            };
        case GET_RELATED_SEMESTER:
            return {
                ...state,
                relatedSemesters: action.payload
            };
        case GET_RELATED_SUBJECTS:
            return {
                ...state,
                relatedSubjects: action.payload
            };
        case GET_RELATED_FILTER_DATA:
            return {
                ...state,
                filteredData: action.payload
            };
        case ATTACH_SUBJECT_TO_SEMESTER:
            return update(state, {
                relatedSubjects: {
                    $push: typeof action.payload.length === 'undefined' && state.relatedSubjects.some(obj => obj.id === action.payload.id) == false
                        ? [action.payload]
                        : typeof action.payload.length !== 'undefined' ? [...action.payload] : []
                }
            });
        case DETACH_SUBJECT_FROM_SEMESTER:
            return {
                ...state,
                relatedSubjects: state.relatedSubjects.filter(subject =>
                    subject.id != action.payload.subjectId || subject.semester_id != action.payload.semesterId)
            };
        case DETACH_TEACHER_FROM_CLASSROOM:
            const teacherSemesterIds = state.filteredData.tableData.filter(data => data.Id == action.payload.teacherId)[0].SemesterIds.split(',');
            const teacherSemesters = state.filteredData.tableData.filter(data => data.Id == action.payload.teacherId)[0].Semester.split(',');
            if (action.payload.semesterIds.length > 0) {
                const diffIds = arr_diff(teacherSemesterIds, action.payload.semesterIds).toString();
                const diff = arr_diff(teacherSemesters, action.payload.semesters).toString();
                console.log(diff);
                return update(state, {
                    filteredData: {
                        tableData: {
                            $set: state.filteredData.tableData.filter(data => {
                                if (data.Id == action.payload.teacherId) {
                                    data.SemesterIds = diffIds;
                                    data.Semester = diff;
                                    return data;
                                }
                            })
                        }
                    }
                });
            }

        /*return update(state, {
            filteredData: {
                tableData: {
                    $set: state.filteredData.tableData.filter(data => data.Id != action.payload.teacherId)
                }
            }
        });*/
        default:
            return state;
    }
}