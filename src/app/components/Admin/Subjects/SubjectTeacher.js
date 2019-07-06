import React, {Component} from "react"
import {connect} from 'react-redux'
import {getAllTeachers} from "../../../actions/UserActions";

class SubjectTeacher extends Component {
    componentDidMount() {
        this.props.getAllTeachers();
    }

    render() {
        const {allTeachers} = this.props.UserReducer;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="year_name">Subject Name</label>
                            <input type="text" id="subject_name" name="subject_name" placeholder="Enter Subject Name"
                                   className="form-control" onChange={this.setName}/>
                            <div className="list-group">
                                <h3 className="list-group-item list-group-item-action active justify-content-between">
                                 Teachers
                                </h3>
                                {allTeachers.map((teacher, index) => (
                                    <div key={teacher.id} className="list-group-item">
                                        <button style={{float: 'right'}}
                                                className={"btn btn-default detachSubjectFromSemester " + teacher.id}
                                                id={teacher.id}
                                                onClick={this.detachSubjectFromSemester}>
                                            <span className="glyphicon glyphicon-plus"></span>
                                        </button>
                                        <h4 className="list-group-item-heading">
                                            {index + 1} - {teacher.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="list-group">
                                <h3 className="list-group-item list-group-item-action active justify-content-between">
                                    Assigned Teachers
                                </h3>
                                {allTeachers.map((teacher, index) => (
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});
export default connect(
    mapStateToProps,
    {getAllTeachers}
)(SubjectTeacher);
