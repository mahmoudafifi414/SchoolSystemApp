import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addSemesterToYear, removeSemesterFromYear} from "../../../actions/YearActions"
import {getSemesters} from "../../../actions/SemesterActions"

class YearSemester extends Component {
    componentDidMount() {
        this.getSemesters();
    }

    getSemesters = e => {
        const {semesters} = this.props.SemesterReducer;
        if (semesters.length == 0) {
            this.props.getSemesters('all');
        }
    };

    addSemesterToYear = (e) => {
        e.preventDefault();
        const start = this.refs['start' + e.currentTarget.id];
        const end = this.refs['end' + e.currentTarget.id];
        const data = {
            yearId: this.props.ComponentRendererReducer.componentMetaData,
            semesterId: e.currentTarget.id,
            startDate: start.value,
            endDate: end.value
        };
        this.props.addSemesterToYear(data);
    };
    removeSemesterFromYear = (e) => {
        e.preventDefault();
        const data = {
            yearId: this.props.ComponentRendererReducer.componentMetaData,
            semesterId: e.currentTarget.id
        };
        this.props.removeSemesterFromYear(data);
    };

    render() {
        const yearInfoWithRelations = this.props.YearsReducer.relationsData;
        const {semesters} = this.props.SemesterReducer;
        const buttonStyle = {
            marginLeft: 142
        };
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3>Attached Semesters</h3>
                    <ol>
                        {yearInfoWithRelations.data.semesters.map((semester) => (
                            <li key={semester.id} className="list-item">
                                <p>{semester.name.charAt(0).toUpperCase() + semester.name.slice(1)} Semester</p>
                                <form id={semester.id} className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="form-group row">
                                                <div className="col-md-5">
                                                    <label htmlFor="inputKey"
                                                           className="col-md-1 control-label">Start</label>
                                                    <input ref={'start' + semester.id} type="date"
                                                           className="form-control"
                                                           defaultValue={semester.pivot.start_date}/>
                                                </div>
                                                <div className="col-md-5">
                                                    <label htmlFor="inputValue"
                                                           className="col-md-1 control-label">End</label>
                                                    <input ref={'end' + semester.id} type="date"
                                                           className="form-control"
                                                           defaultValue={semester.pivot.end_date}/>
                                                </div>
                                                <div className="col-md-2">
                                                    <button className="btn btn-danger"
                                                            id={semester.id}
                                                            onClick={this.removeSemesterFromYear}>
                                                        <span className="glyphicon glyphicon-remove"></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p style={{color: 'red'}} ref={'errorSaving' + semester.id}></p>
                                        </div>
                                    </div>
                                </form>
                                <hr/>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="col-md-1" style={{borderLeft: '1px solid black', height: '500px'}}></div>
                <div className="col-md-5">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active">
                            Semesters
                        </a>
                        {semesters.length > 0 ?
                            semesters.map((semester) => (
                                    yearInfoWithRelations.data.semesters.some(obj => obj.id === semester.id) == false ?
                                        <div key={semester.id} className="form-group">
                                            <h4 style={{color: 'red'}}>{semester.name.charAt(0).toUpperCase() + semester.name.slice(1)}
                                                Semester</h4>
                                            <form id={semester.id} className="form-horizontal" role="form">
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <div className="col-md-5">
                                                                <label htmlFor="inputKey"
                                                                       className="col-md-1 control-label">Start</label>
                                                                <input ref={'start' + semester.id} type="date"
                                                                       className="form-control"/>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <label htmlFor="inputValue"
                                                                       className="col-md-1 control-label">End</label>
                                                                <input ref={'end' + semester.id} type="date"
                                                                       className="form-control"/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <label className="col-md-1">ff</label>
                                                                <button className="btn btn-success"
                                                                        id={semester.id}
                                                                        onClick={this.addSemesterToYear}>Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p style={{color: 'red'}} ref={'errorSaving' + semester.id}></p>
                                                    </div>
                                                </div>
                                            </form>

                                            <hr/>
                                        </div> : ''
                                )
                            ) : ''}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    YearsReducer: state.YearsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer,
    SemesterReducer: state.SemesterReducer
});

export default connect(
    mapStateToProps,
    {addSemesterToYear, removeSemesterFromYear, getSemesters}
)(YearSemester);