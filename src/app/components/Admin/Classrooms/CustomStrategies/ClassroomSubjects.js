import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../../../../assets/css/Admin/classrooms.css'
import {Modal} from 'react-bootstrap'
import {
    getSubjects
} from "../../../../actions/SubjectActions";
import {
    compareArrayDiff
} from "../../../../Helpers";
import {
    attachSubjectToSemester,
    detachSubjectToSemester
} from "../../../../actions/ClassroomsActions";

class ClassroomSubjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            semesterId: ''
        };
    }

    componentDidMount() {
        this.checkedSubjects = new Set();
        this.props.getSubjects('all');
    }

    handleChangedSubjectsCheckbox = (e) => {
        if (this.checkedSubjects.has(e.currentTarget.value)) {
            this.checkedSubjects.delete(e.currentTarget.value);
        } else {
            this.checkedSubjects.add(e.currentTarget.value);
        }
    };
    attachSubjectToSemester = (e) => {
        const data = {
            yearId: this.props.yearId,
            classroomId: this.props.classroomId,
            semesterId: this.state.semesterId,
            subjectIds: [...this.checkedSubjects]
        };
        setTimeout(() => {
            this.props.attachSubjectToSemester(data);
        }, 0);
        this.handleClose(e);
    };
    detachSubjectFromSemester = (e) => {
        const semesterId = e.currentTarget.className.split(' ')[3];
        const data = {
            yearId: this.props.yearId,
            classroomId: this.props.classroomId,
            semesterId: semesterId,
            subjectId: e.currentTarget.id
        };
        setTimeout(() => {
            this.props.detachSubjectToSemester(data);
        }, 0);
        this.handleClose(e);
    };
    handleClose = (e) => {
        this.checkedSubjects = new Set();
        this.setState({showModal: false});
    };

    handleShow = (e) => {
        const semesterId = e.currentTarget.id;
        this.setState({showModal: true, semesterId: semesterId});
    };

    render() {
        const {relatedSubjects} = this.props.ClassroomsReducer;
        const {subjects} = this.props.SubjectReducer;
        return (
            <div>
                <h1>Subjects</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {this.props.relatedSemesters.map((semester) => (
                                <div className={"col-md-" + Math.floor(12 / this.props.relatedSemesters.length)}>
                                    <div className="list-group">
                                        <h3
                                           className="list-group-item list-group-item-action active justify-content-between">{semester.name}
                                            <button style={{float: 'right', height: 30}} onClick={this.handleShow}
                                                    id={semester.id}
                                                    className="btn btn-default">
                                                <span className="glyphicon glyphicon-plus"></span>
                                            </button>
                                        </h3>
                                        {relatedSubjects.filter(subject => subject.semester_id == semester.id).map((subject, index) => (
                                            <div key={subject.id} className="list-group-item">
                                                <button style={{float: 'right'}}
                                                        className={"btn btn-danger detachSubjectFromSemester " + semester.id}
                                                        id={subject.id}
                                                        onClick={this.detachSubjectFromSemester}>
                                                    <span className="glyphicon glyphicon-minus"></span>
                                                </button>
                                                <h4 className="list-group-item-heading">
                                                    {index + 1} - {subject.name}
                                                </h4>
                                                <p className="list-group-item-text">
                                                    teacher:
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.showModal}
                    onHide={this.handleClose}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Add Subject To Semester (These are available subjects)
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {subjects.filter(compareArrayDiff(relatedSubjects, this.state.semesterId)).length > 0 ?
                            subjects.filter(compareArrayDiff(relatedSubjects, this.state.semesterId)).map((subject) => (
                                <div key={subject.id}>
                                    <input onChange={this.handleChangedSubjectsCheckbox} type="checkbox"
                                           name="subjects"
                                           value={subject.id}/>
                                    <label>{subject.name}</label>
                                </div>
                            )) : <div>Sorry, all subjects is assigned or there is no available subject</div>}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={this.attachSubjectToSemester}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>


        );
    }
}

const mapStateToProps = state => ({
    ClassroomsReducer: state.ClassroomsReducer,
    SubjectReducer: state.SubjectReducer
});

export default connect(
    mapStateToProps,
    {getSubjects, attachSubjectToSemester, detachSubjectToSemester}
)(ClassroomSubjects);