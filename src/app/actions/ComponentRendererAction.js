import {SET_COMPONENT} from "./types"

export const getLinkNameInSideNavigation = (elementId, elementClass) => dispatch => {
    let componentToRender = '';
    let componentMetaData = 0;
    let yearId = 0;
    let classroomId = 0;
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
        case 'add_edit_year':
            componentToRender = 'AddEditSemester';
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