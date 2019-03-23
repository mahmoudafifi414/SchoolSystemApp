import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addClassroomToYear,removeClassroomFromYear} from '../../../actions/YearActions'

class YearsClassrooms extends Component {
    addClassroomToYear = (e) => {
        e.preventDefault();
        const data = {
            yearId: this.props.ComponentRendererReducer.componentMetaData,
            classroomId: e.target.id
        };
        this.props.addClassroomToYear(data);
    };
    removeClassroomFromYear = (e) => {
        e.preventDefault();
        const data = {
            yearId: this.props.ComponentRendererReducer.componentMetaData,
            classroomId: e.target.id
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
                    <ol>
                        {yearInfoWithRelations.data.classrooms.map((classroom) => (
                            <li key={classroom.id} className="list-item">
                                {classroom.name}
                                <button style={buttonStyle} className="btn btn-danger" id={classroom.id}
                                        onClick={this.removeClassroomFromYear}>
                                    <span className="glyphicon glyphicon-minus"></span>
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active">Classrooms</a>
                        {classrooms.data.map((classroom) => (
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
    {addClassroomToYear,removeClassroomFromYear}
)(YearsClassrooms);