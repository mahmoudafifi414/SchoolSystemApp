import React, {Component} from "react"
import {connect} from 'react-redux'
import {getAllTeachers} from "../../../actions/UserActions";
import {getSubjects, getRelatedTeachers, applyTeacherToSubject} from "../../../actions/SubjectActions";
import {Modal} from "react-bootstrap";
import AddEditSubject from "./AddEditSubject";
import {compareArrayDiffGeneric} from "../../../Helpers";

class SubjectTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            relatedTeachersStaging: [],
            availableTeachersStaging: [],
            currentSubject: ''
        }
    }

    componentDidMount() {
        this.props.getAllTeachers();
        this.props.getSubjects('all');
        const componentMetaData = this.props.ComponentRendererReducer.componentMetaData;
        if (componentMetaData != '') {
            this.getDataBasedOnSubject(componentMetaData);
        }
    }

    handleClose = (e) => {
        this.setState({showModal: false});
    };
    getDataBasedOnSubject = (subject) => {
        this.setState({relatedTeachersStaging: [], availableTeachersStaging: []});
        this.props.getRelatedTeachers(subject);
        this.setState({currentSubject: subject});
    };
    handleSubjectSelection = (e) => {
        const subject = e.currentTarget.value;
        this.getDataBasedOnSubject(subject);
    };
    handleShow = (e) => {
        this.setState({
            showModal: true,
        });
    };
    attacheTeacherFromSubject = (e) => {
        const id = e.currentTarget.id;
        const selectedTeacher = this.props.UserReducer.allTeachers.filter(teacher => teacher.id == id);
        this.setState(prevState => ({
            relatedTeachersStaging: [
                ...prevState.relatedTeachersStaging,
                selectedTeacher[0]
            ]
        }));
        this.setState(prevState => ({
            availableTeachersStaging: [
                ...prevState.availableTeachersStaging.filter(teacher => teacher.id != id)
            ]
        }));
    };
    detachTeacherFromSubject = (e) => {
        const id = e.currentTarget.id;
        const selectedTeacher = this.props.UserReducer.allTeachers.filter(teacher => teacher.id == id);
        this.setState(prevState => ({
            availableTeachersStaging: [
                ...prevState.availableTeachersStaging,
                selectedTeacher[0]
            ]
        }));
        this.setState(prevState => ({
            relatedTeachersStaging: [
                ...prevState.relatedTeachersStaging.filter(teacher => teacher.id != id)
            ]
        }));
    };
    applyTeachersToSubject = (e) => {
        let relatedTeachers = [...this.props.SubjectReducer.relatedTeachers, ...this.state.relatedTeachersStaging];
        let relatedTeachersIds = [];
        relatedTeachers.filter(compareArrayDiffGeneric(this.state.availableTeachersStaging)).filter(
            (teacher) => {
                relatedTeachersIds.push(teacher.id);
            }
        );
        this.props.applyTeacherToSubject(this.state.currentSubject, relatedTeachersIds);
    };

    render() {
        const componentMetaData = this.props.ComponentRendererReducer.componentMetaData;
        const {allTeachers} = this.props.UserReducer;
        const {subjects} = this.props.SubjectReducer;
        let relatedTeachers = [...this.props.SubjectReducer.relatedTeachers, ...this.state.relatedTeachersStaging];
        relatedTeachers = relatedTeachers.filter(compareArrayDiffGeneric(this.state.availableTeachersStaging));
        const availableTeachers = allTeachers.filter(compareArrayDiffGeneric(relatedTeachers));
        return (
            <div className="row">
                {this.props.SubjectReducer.assignedMsg != '' ?
                    <div className="row">
                        <div className="form-group col-md-12">
                            <div style={{textAlign: 'center'}} className="alert alert-success" role="alert"
                                 id="alert">
                                {this.props.SubjectReducer.assignedMsg}
                            </div>
                        </div>
                    </div> : ''}
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-8">
                                    <label htmlFor="subject_name">Subject Name</label>
                                    <select defaultValue={componentMetaData} id="subject_name" name="subject_name"
                                            className="form-control" onChange={this.handleSubjectSelection}>
                                        <option></option>
                                        {subjects.map((subject, index) => (
                                            <option  key={subject.id}
                                                    value={subject.id}>
                                                {subject.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-1">
                                    <button style={{'marginTop': 24}} className={"btn btn-primary"}
                                            onClick={this.handleShow}>
                                        <span className="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>
                                {this.state.currentSubject != '' ?
                                    <div className="col-md-3">
                                        <button style={{'marginTop': 24}} className={"btn btn-primary"}
                                                onClick={this.applyTeachersToSubject}
                                                disabled={this.state.currentSubject != '' ? false : true}>
                                            Save Changes
                                        </button>
                                    </div>
                                    : ''}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="list-group">
                                        <h3 className="list-group-item list-group-item-action active justify-content-between">
                                            Available Teachers
                                        </h3>
                                        {availableTeachers.length > 0 && this.state.currentSubject != '' ?
                                            availableTeachers.map((teacher, index) => (
                                                <div key={teacher.id} className="list-group-item">
                                                    <button style={{float: 'right'}}
                                                            className={"btn btn-default detachSubjectFromSemester " + teacher.id}
                                                            id={teacher.id}
                                                            onClick={this.attacheTeacherFromSubject}>
                                                        <span className="glyphicon glyphicon-plus"></span>
                                                    </button>
                                                    <h4 className="list-group-item-heading">
                                                        {index + 1} - {teacher.name}
                                                    </h4>
                                                </div>
                                            )) :
                                            <div style={{textAlign: 'center'}} className="list-group-item">There are no
                                                available Teachers</div>}
                                    </div>
                                </div>
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
                                                    onClick={this.detachTeacherFromSubject}>
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
    SubjectReducer: state.SubjectReducer,
    ComponentRendererReducer: state.ComponentRendererReducer
});
export default connect(
    mapStateToProps,
    {getAllTeachers, getSubjects, getRelatedTeachers, applyTeacherToSubject}
)(SubjectTeacher);
