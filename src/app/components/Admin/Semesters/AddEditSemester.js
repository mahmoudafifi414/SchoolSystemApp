import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSemester} from '../../../actions/SemesterActions'

export class AddEditSemester extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    setName = (e) => {
        const name = e.currentTarget.value;
        this.setState({name: name});
    };
    addSemester = (e) => {
        e.preventDefault();
        this.props.addSemester(this.state);
    };

    render() {
        return (
            <div>
                {this.props.SemesterReducer.msg != '' ?
                    <div className="row col-md-5">
                        <div style={{textAlign: 'center'}} className="alert alert-success" role="alert" id="alert">
                            {this.props.SemesterReducer.msg}
                        </div>
                    </div> : ''}
                <div className="row">
                    <div className="form-group col-md-12">
                        <div className="col-md-3">
                            <label htmlFor="year_name">Semester Name</label>
                            <input type="text" id="year_name" name="year_name" placeholder="Enter Semester Name"
                                   className="form-control" onChange={this.setName}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.addSemester}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    SemesterReducer: state.SemesterReducer
});
export default connect(
    mapStateToProps,
    {addSemester}
)(AddEditSemester);
