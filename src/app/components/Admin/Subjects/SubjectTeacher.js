import React, {Component} from "react"
import {connect} from 'react-redux'
import {getAllTeachers} from "../../../actions/UserActions";
import {getSubjects, getRelatedTeachers} from "../../../actions/SubjectActions";
import {Modal} from "react-bootstrap";
import AddEditSubject from "./AddEditSubject";
import {compareArrayDiffGeneric} from "../../../Helpers";

class SubjectTeacher extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            relatedTeachers: []
        }
    }

    componentDidMount() {
        this.props.getAllTeachers();
        this.props.getSubjects('all');
    }

    handleClose = (e) => {
        this.setState({showModal: false});
    };
    handleSubjectSelection = (e) => {
        const subject = e.currentTarget.value;
        this.props.getRelatedTeachers(subject);
    };
    handleShow = (e) => {
        this.setState({
            showModal: true,
        });
    };
    attacheTeacherToSubject = (e) => {
        const {relatedTeachers} = this.props.SubjectReducer;
        this.setState({relatedTeachers: relatedTeachers});
    };

    render() {
        const {allTeachers} = this.props.UserReducer;
        const {subjects} = this.props.SubjectReducer;
        const {relatedTeachers} = this.props.SubjectReducer;
        /*console.log(relatedTeachers);*/
        const availableTeachers = allTeachers.filter(compareArrayDiffGeneric(relatedTeachers));
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="year_name">Subject Name</label>
                                <select id="subject_name" name="subject_name"
                                        className="form-control" onChange={this.handleSubjectSelection}>
                                    {subjects.map((subject, index) => (
                                        <option key={subject.id} value={subject.id}>
                                            {subject.name}
                                        </option>
                                    ))}
                                </select>
                                <button onClick={this.handleShow}>rapid add</button>
                                <div className="list-group">
                                    <h3 className="list-group-item list-group-item-action active justify-content-between">
                                        Available Teachers
                                    </h3>
                                    {availableTeachers.length > 0 ?
                                        availableTeachers.map((teacher, index) => (
                                            <div key={teacher.id} className="list-group-item">
                                                <button style={{float: 'right'}}
                                                        className={"btn btn-default detachSubjectFromSemester " + teacher.id}
                                                        id={teacher.id}
                                                        onClick={this.attacheTeacherToSubject}>
                                                    <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <h4 className="list-group-item-heading">
                                                    {index + 1} - {teacher.name}
                                                </h4>
                                            </div>
                                        )) : <div style={{textAlign: 'center'}} className="list-group-item">There are no
                                            available Teachers</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="list-group">
                                    <h3 className="list-group-item list-group-item-action active justify-content-between">
                                        Assigned Teachers
                                    </h3>
                                    {relatedTeachers.length > 0 ?
                                        relatedTeachers.map((teacher, index) => (
                                            <div key={teacher.id} className="list-group-item">
                                                <button style={{float: 'right'}}
                                                        className={"btn btn-danger detachSubjectFromSemester " + teacher.id}
                                                        id={teacher.id}
                                                        onClick={this.detachSubjectFromSemester}>
                                                    <span className="glyphicon glyphicon-minus"></span>
                                                </button>
                                                <h4 className="list-group-item-heading">
                                                    {index + 1} - {teacher.name}
                                                </h4>
                                            </div>
                                        )) : <div style={{textAlign: 'center'}} className="list-group-item">List Is
                                            Empty</div>}
                                </div>
                            </div>
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
                            Add Rapid Subject
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddEditSubject/>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer,
    SubjectReducer: state.SubjectReducer
});
export default connect(
    mapStateToProps,
    {getAllTeachers, getSubjects, getRelatedTeachers}
)(SubjectTeacher);
