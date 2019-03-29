import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getClassrooms, getRelatedYears} from "../../../actions/ClassroomsActions";

class ClassroomDetails extends Component {
    constructor() {
        super();
        this.state = {displayOptions: ['Students', 'Subjects', 'Teachers']}
    }

    componentDidMount() {
        this.getClassrooms();
        const classroomId = this.props.ComponentRendererReducer.componentMetaData;
        this.props.getRelatedYears(classroomId);
    }

    getRelatedYears = e => {
        e.preventDefault();
        this.props.getRelatedYears(e.currentTarget.value);
    };
    getClassrooms = () => {
        const {classrooms} = this.props.ClassroomsReducer;
        if (classrooms.length == 0) {
            this.props.getClassrooms('all');
        }
    };

    render() {
        const {classrooms} = this.props.ClassroomsReducer;
        const {relatedYears} = this.props.ClassroomsReducer;
        const classroomId = this.props.ComponentRendererReducer.componentMetaData;
        if (typeof classrooms !== 'undefined' && relatedYears.hasOwnProperty('years')) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group col-md-4">
                                        <label>Classroom</label>
                                        <select onChange={this.getRelatedYears} className="form-control"
                                                defaultValue={classroomId}>
                                            {classrooms.map((classroom) => (
                                                <option key={classroom.id}
                                                        value={classroom.id}>{classroom.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Years</label>
                                        <select className="form-control">
                                            {relatedYears.years.map((year) => (
                                                <option key={year.id}
                                                        value={year.id}>{year.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Display Options</label>
                                        {<select className="form-control" defaultValue={classroomId}>
                                            <option></option>
                                            {this.state.displayOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div>Loading...........</div>
        }
    }
}

const mapStateToProps = state => ({
    ClassroomsReducer: state.ClassroomsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer,
    YearsReducer: state.YearsReducer
});

export default connect(
    mapStateToProps,
    {getClassrooms, getRelatedYears}
)(ClassroomDetails);