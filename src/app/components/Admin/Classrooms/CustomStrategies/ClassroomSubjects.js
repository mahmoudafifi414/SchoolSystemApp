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
    attachSubjectToSemester
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
        if (!this.checkedSubjects.has(e.currentTarget.value)) {
            this.checkedSubjects.add(e.currentTarget.value);
        }
    };
    attachSubjectToSemester = (e) => {
        const data = {
            'yearId': this.props.yearId,
            'classroomId': this.props.classroomId,
            'semesterId': this.state.semesterId,
            'subjectIds': this.checkedSubjects
        };
        console.log(data);
        //this.props.attachSubjectToSemester()
        this.handleClose(e);
    };
    handleClose = (e) => {
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
                <div className="row row-divided">
                    {this.props.relatedSemesters.map((semester) => (
                        <div key={semester.id}
                             className={"col-xs-" + Math.floor(12 / this.props.relatedSemesters.length) + " column-th"}>
                            <h4>{semester.name}
                                <span className="buttonSpan">
                                    <button onClick={this.handleShow} id={semester.id} className="btn btn-default"> Add
                                        Subject
                                    </button>
                                </span>
                            </h4>
                            {relatedSubjects.filter(subject => subject.semester_id == semester.id).map((subject, index) => (
                                <h4 key={subject.id}>{index + 1} - {subject.name}</h4>
                            ))}
                        </div>
                    ))}
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
                        {subjects.filter(compareArrayDiff(relatedSubjects, this.state.semesterId)).map((subject) => (
                            <div key={subject.id}>
                                <input onChange={this.handleChangedSubjectsCheckbox} type="checkbox" name="subjects" value={subject.id}/>
                                <label>{subject.name}</label>
                            </div>
                        ))}
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
    {getSubjects, attachSubjectToSemester}
)(ClassroomSubjects);