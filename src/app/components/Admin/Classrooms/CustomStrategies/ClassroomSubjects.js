import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../../../../assets/css/Admin/classrooms.css'
import {Modal} from 'react-bootstrap'

class ClassroomSubjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleClose = (e) => {
        this.setState({showModal: false});
    }

    handleShow = (e) => {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div>
                <h1>Subjects</h1>
                <div className="row row-divided">
                    {this.props.relatedSemesters.map((semester) => (
                        <div key={semester.id}
                             className={"col-xs-" + Math.floor(12 / this.props.relatedSemesters.length) + " column-th"}>
                            <h4>{semester.name}
                                <button onClick={this.handleShow} className="btn btn-default"> Add Subject</button>
                            </h4>
                            <p>6 column wide (col-xs-6)</p>
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
                            Add Subject To Semester
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <input type="checkbox" name="subjects" value="one"/> one <br/>
                    </Modal.Body>
                </Modal>
            </div>


        );
    }
}

export default ClassroomSubjects