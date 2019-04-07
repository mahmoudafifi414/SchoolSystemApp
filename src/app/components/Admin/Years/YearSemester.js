import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addClassroomToYear, removeClassroomFromYear} from '../../../actions/YearActions'
import {getClassrooms} from '../../../actions/ClassroomsActions'

class YearSemester extends Component {
    constructor() {
        super();
        this.state = {
            disableAddAll: false,
            disableRemoveAll: false
        }
    }
    componentDidMount() {
        this.getClassrooms()
    }

    getClassrooms = e => {
        const {classrooms} = this.props.ClassroomsReducer;
        if (classrooms.length == 0) {
            this.props.getClassrooms('all');
        }
    };

    addClassroomToYear = (e) => {
        e.preventDefault();
        if (e.currentTarget.id == 'attach_all_classrooms') {
            console.log('aaa');
            this.setState({disableAddAll: true})
            this.setState({disableRemoveAll: false});
        }
        const data = {
            yearId: this.props.ComponentRendererReducer.componentMetaData,
            classroomId: e.currentTarget.id
        };
        this.props.addClassroomToYear(data);
    };
    removeClassroomFromYear = (e) => {
        e.preventDefault();
        this.setState({disableAddAll: false});
        this.setState({disableRemoveAll: true});
        const data = {
            yearId: this.props.ComponentRendererReducer.componentMetaData,
            classroomId: e.currentTarget.id
        };
        this.props.removeClassroomFromYear(data);
    };

    render() {
        const yearInfoWithRelations = this.props.YearsReducer.relationsData;
        const {classrooms} = this.props.ClassroomsReducer;
        const buttonStyle = {
            marginLeft: 142
        };
        return (
            <div className="row">
                <div className="col-md-8">
                    <h3>Attached Classrooms
                        <button disabled={this.state.disableRemoveAll} style={buttonStyle} className="btn btn-danger" id='detach_all_classrooms'
                                onClick={this.removeClassroomFromYear}>
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                    </h3>
                    <ol>
                        {yearInfoWithRelations.data.classrooms.map((classroom) => (
                            <li key={classroom.id} className="list-item">
                                {classroom.name}
                                <button style={buttonStyle} className="btn btn-danger" id={classroom.id}
                                        onClick={this.removeClassroomFromYear}>
                                    <span className="glyphicon glyphicon-minus"></span>
                                </button>
                                <hr/>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active">
                            Classrooms
                            <button disabled={this.state.disableAddAll} onClick={this.addClassroomToYear} style={buttonStyle} className="btn btn-success"
                                    id="attach_all_classrooms">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </a>
                        {classrooms.map((classroom) => (
                                yearInfoWithRelations.data.classrooms.some(obj => obj.id === classroom.id) == false ?
                                    <div key={classroom.id} className="list-group-item justify-content-between">
                                        {classroom.name}
                                        <button style={buttonStyle} className="btn btn-success" id={classroom.id}
                                                onClick={this.addClassroomToYear}>
                                            <span className="glyphicon glyphicon-plus"></span>
                                        </button>
                                    </div> : ''
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    YearsReducer: state.YearsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer,
    ClassroomsReducer: state.ClassroomsReducer
});

export default connect(
    mapStateToProps,
    {addClassroomToYear, removeClassroomFromYear,getClassrooms}
)(YearSemester);