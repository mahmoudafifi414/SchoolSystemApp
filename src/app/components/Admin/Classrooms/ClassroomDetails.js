import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    getClassrooms,
    getRelatedFilterData,
    getRelatedYears,
    getRelatedSemesters,
    getRelatedSubjects
} from "../../../actions/ClassroomsActions";
import FilterDisplayBuilder from './FilterDisplayBuilder'
import ClassroomSubjects from "./CustomStrategies/ClassroomSubjects";

class ClassroomDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayOptions: ['Students', 'Subjects', 'Teachers'],
            currentOption: '',
            data: {classroomId: props.ComponentRendererReducer.componentMetaData},
            displayOptionDisplay: false,
            selectedSemester: ''
        }

    }

    componentDidMount() {
        this.getClassrooms();
        const classroomId = this.props.ComponentRendererReducer.componentMetaData;
        this.props.getRelatedYears(classroomId);
        this.props.getRelatedSemesters(classroomId);
    }


    getRelatedYearsAndSemesters = e => {
        const that = this;
        const selectedOption = e.currentTarget.value;
        this.props.getRelatedYears(selectedOption);
        this.props.getRelatedSemesters(selectedOption);
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                classroomId: selectedOption
            }
        }));
        setTimeout(function () {
            that.props.getRelatedFilterData(that.state.data)
        }, 0)
    };
    getClassrooms = () => {
        const {classrooms} = this.props.ClassroomsReducer;
        if (classrooms.length == 0) {
            this.props.getClassrooms('all');
        }
    };

    changeYear = (e) => {
        const that = this;
        const selectedOption = e.currentTarget.value;
        this.setState({displayOptionDisplay: false});
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                optionName: ''
            }
        }));
        if (selectedOption) {
            this.setState({displayOptionDisplay: true})
        }
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                yearId: selectedOption
            }
        }));
        setTimeout(function () {
            that.props.getRelatedFilterData(that.state.data)
        }, 0)
    };
    changeAction = (e) => {
        const that = this;
        const selectedOption = e.currentTarget.value;
        if (selectedOption) {
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    optionName: selectedOption
                }
            }));
            this.setState({currentOption: selectedOption});
        }
        if (selectedOption == 'Subjects') {
            this.props.getRelatedSubjects(this.state.data.classroomId, this.state.data.yearId);
        }
        setTimeout(function () {
            that.props.getRelatedFilterData(that.state.data)
        }, 0)
    };
    changeSemester = (e) => {
        const selectedOption = e.currentTarget.value;
        this.setState({selectedSemester: selectedOption});
    };

    render() {
        const {classrooms} = this.props.ClassroomsReducer;
        const {relatedYears} = this.props.ClassroomsReducer;
        const {relatedSemesters} = this.props.ClassroomsReducer;
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
                                        <select onChange={this.getRelatedYearsAndSemesters} className="form-control"
                                                defaultValue={classroomId}>
                                            {classrooms.map((classroom) => (
                                                <option key={classroom.id}
                                                        value={classroom.id}>{classroom.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Year</label>
                                        <select onChange={this.changeYear} className="form-control">
                                            <option></option>
                                            {relatedYears.years.map((year) => (
                                                <option key={year.id}
                                                        value={year.id}>{year.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Display Options</label>
                                        <select onChange={this.changeAction} className="form-control"
                                                defaultValue={classroomId}>
                                            <option></option>
                                            {this.state.displayOptionDisplay ?
                                                this.state.displayOptions.map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                )) : ''
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.data.optionName != 'Subjects' ?
                                <FilterDisplayBuilder data={this.state.data}/> :
                                <ClassroomSubjects classroomId={this.state.data.classroomId}
                                                   yearId={this.state.data.yearId}
                                                   relatedSemesters={relatedSemesters}/>
                            }
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
    {getClassrooms, getRelatedYears, getRelatedFilterData, getRelatedSemesters, getRelatedSubjects}
)(ClassroomDetails);