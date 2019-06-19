import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../../../../assets/css/Admin/classrooms.css'
import {Modal} from 'react-bootstrap'
import {
    getSubjects
} from "../../../../actions/SubjectActions";

class ClassroomSubjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            semesterId: ''
        };
    }

    componentDidMount() {
        this.props.getSubjects('all');
    }

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
                                <button onClick={this.handleShow} id={semester.id} className="btn btn-default"> Add
                                    Subject
                                </button>
                            </h4>
                            {relatedSubjects.filter(subject => subject.semester_id == semester.id).map((subject) => (
                                <h4 key={subject.id}>{subject.name}</h4>
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
                        {subjects.filter(subject => subject.semester_id != this.state.semesterId).map((subject) => (
                            <div key={subject.id}>
                                <input type="checkbox" name="subjects" value={subject.id}/>
                                <label>{subject.name}</label>
                            </div>
                        ))}
                    </Modal.Body>
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
    {getSubjects}
)(ClassroomSubjects);