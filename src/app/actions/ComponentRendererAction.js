import {SET_COMPONENT} from "./types"

export const getLinkNameInSideNavigation = (elementId, elementClass) => dispatch => {
    let componentToRender = '';
    let componentMetaData = 0;
    let yearId = 0;
    let subjectId = 0;
    let classroomId = 0;
    let subjectTeachersId = 0;
    switch (elementId) {
        case 'all_users':
            componentToRender = 'AllUsers';
            break;
        case 'all_classrooms':
            componentToRender = 'AllClassrooms';
            break;
        case 'Classrooms':
            componentToRender = 'Classrooms';
            break;
        case 'all_semesters':
            componentToRender = 'AllSemesters';
            break;
        case 'all_years':
            componentToRender = 'AllYears';
            break;
        case 'add_user':
            componentToRender = 'AddEditUser';
            break;
        case 'edit_user':
            /*const userId = e.target.className.split(' ')[2];*/
            /*this.setState({componentToRender: <AddEditUser actionType="edit" userId={userId}/>});*/
            componentToRender = 'AddEditUser';
            break;
        case 'year_info':
            yearId = elementClass.split(' ')[2];
            componentToRender = 'InfoPage';
            componentMetaData = yearId;
            break;
        case 'year_classrooms':
            yearId = elementClass.split(' ')[2];
            componentToRender = 'YearsClassrooms';
            componentMetaData = yearId;
            break;
        case 'classroom_info':
            classroomId = elementClass.split(' ')[2];
            componentToRender = 'ClassroomDetails';
            componentMetaData = classroomId;
            break;
        case 'year_semesters':
            yearId = elementClass.split(' ')[2];
            componentToRender = 'YearSemester';
            componentMetaData = yearId;
            break;
        case 'add_edit_year':
            componentToRender = 'AddEditYear';
            break;
        case 'add_edit_semester':
            componentToRender = 'AddEditSemester';
            break;
        case 'all_subjects':
            componentToRender = 'AllSubjects';
            break;
        case 'add_edit_subject':
            componentToRender = 'AddEditSubject';
            break;
        case 'assign_subject_teacher':
            componentToRender = 'SubjectTeacher';
            componentMetaData = '';
            break;
        case 'subject_teachers':
            componentToRender = 'SubjectTeacher';
            subjectTeachersId = elementClass.split(' ')[2];
            componentMetaData = subjectTeachersId;
            break;
        case 'subject_info':
            subjectId = elementClass.split(' ')[2];
            componentToRender = 'SubjectInfoPage';
            componentMetaData = subjectId;
            break;
        default:
            componentToRender = 'InfoPage';
            break;
    }
    dispatch({
        type: SET_COMPONENT,
        payload: componentToRender,
        payloadMeta: componentMetaData
    });
};