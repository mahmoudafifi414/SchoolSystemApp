import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {detachTeacherFromClassroom} from "../../../../actions/ClassroomsActions";
class ClassroomTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            teacherSemesters: [],
            currentTeacher: ''
        };
    }

    componentDidMount = () => {
        this.checkedTeacherSemesters = new Set();
    };

    detachTeacherFromClassroom = (e) => {
        const teacherId = e.currentTarget.id.split('_')[1];
        const params = {
            yearId: this.props.data.yearId,
            classroomId: this.props.data.classroomId,
            teacherId: teacherId
        };
        if (e.currentTarget.id.split('_')[0] === 'save' && [...this.checkedTeacherSemesters].length > 0) {
            params.semesters = [...this.checkedTeacherSemesters];
            console.log(params);
            //this.props.detachTeacherFromClassroom(params);
            this.handleClose(e);
        } else if (e.currentTarget.id.split('_')[0] === 'save' && [...this.checkedTeacherSemesters].length == 0) {
            alert('Please select at least one semester to detach');
        } else if (e.currentTarget.id.split('_')[0] === 'detach') {
            console.log(params);
            //this.props.detachTeacherFromClassroom(params);
        }
    };
    handleChangedTeacherSemestersCheckbox = (e) => {
        if (this.checkedTeacherSemesters.has(e.currentTarget.value)) {
            this.checkedTeacherSemesters.delete(e.currentTarget.value);
        } else {
            this.checkedTeacherSemesters.add(e.currentTarget.value);
        }
    };
    handleClose = (e) => {
        this.checkedTeacherSemesters = new Set();
        this.setState({showModal: false});
    };

    handleShow = (e) => {
        const teacherId = e.currentTarget.id.split('_')[1];
        const teacherSemesters = this.props.filteredData.tableData.filter(teacher => teacher.Id == teacherId)[0].Semester.split(',');
        this.setState({showModal: true, teacherSemesters: teacherSemesters, currentTeacher: teacherId});
    };

    render() {
        if (typeof this.props.filteredData !== 'undefined' && typeof this.props.filteredData.tableColumns !== 'undefined') {
            return (
                <div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {this.props.filteredData.tableColumns.map((col) => (
                                <th key={col} scope="col">{col}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.filteredData.tableData.length > 0 ?
                            this.props.filteredData.tableData.map((data) => (
                                <tr key={data[0]}>
                                    {this.props.filteredData.tableColumns.map((col) => (
                                        col != 'Action' ?
                                            <td key={data[col]} scope="col">{data[col]}</td>
                                            : <td key={data['id']}>
                                                <button onClick={this.handleShow} id={'edit_' + data['Id']}
                                                        className="btn btn-primary">Edit
                                                </button>
                                                <button onClick={this.detachTeacherFromClassroom}
                                                        id={'detach_' + data['Id']} className="btn btn-primary">detach
                                                </button>
                                            </td>
                                    ))}
                                </tr>
                            ))
                            :

                            <tr>
                                {this.props.data.optionName ?
                                    <td colSpan={this.props.filteredData.tableColumns.length}
                                        style={{textAlign: 'center'}}>There
                                        is no Data available</td>
                                    : <td></td>}
                            </tr>

                        }
                        </tbody>
                    </table>
                    <Modal
                        show={this.state.showModal}
                        onHide={this.handleClose}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Detach Teacher from Classroom
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.teacherSemesters.map((semester) => (
                                <div key={semester}>
                                    <input onChange={this.handleChangedTeacherSemestersCheckbox} type="checkbox"
                                           name="teacherSemesters"
                                           value={semester}/>
                                    <label>{semester}</label>
                                </div>
                            ))}
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-primary" id={"save_" + this.state.currentTeacher}
                                    onClick={this.detachTeacherFromClassroom}>
                                Save Changes
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        } else {
            return <div></div>
        }

    }
}

const mapStateToProps = state => ({
    ClassroomsReducer: state.ClassroomsReducer
});

export default connect(
    mapStateToProps,
    {detachTeacherFromClassroom}
)(ClassroomTeachers);