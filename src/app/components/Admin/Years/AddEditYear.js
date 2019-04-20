import React, {Component} from "react"
import {connect} from 'react-redux'
import {addYear} from "../../../actions/YearActions";

class AddEditYear extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            startDate: '',
            endDate: ''
        };
    }

    setName = (e) => {
        const name = e.currentTarget.value;
        this.setState({name: name});
    };
    setStart = (e) => {
        const startDate = e.currentTarget.value;
        this.setState({startDate: startDate});
    };
    setEnd = (e) => {
        const endDate = e.currentTarget.value;
        this.setState({endDate: endDate});
    };

    addYear = (e) => {
        e.preventDefault();
        this.props.addYear(this.state);
    };

    render() {
        return (
            <div>
                {this.props.YearsReducer.msg != '' ?
                    <div className="row col-md-5">
                        <div style={{textAlign: 'center'}} className="alert alert-success" role="alert" id="alert">
                            {this.props.YearsReducer.msg}
                        </div>
                    </div> : ''}
                <div className="row">
                    <div className="form-group col-md-12">
                        <div className="col-md-3">
                            <label htmlFor="year_name">Year Name</label>
                            <input type="text" id="year_name" name="year_name" placeholder="Enter Year Name"
                                   className="form-control" onChange={this.setName}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="year_start">Year Start Date</label>
                            <input type="date" id="year_start" name="year_start" placeholder="Enter Year start Date"
                                   className="form-control" onChange={this.setStart}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="year_end">Year End Date</label>
                            <input type="date" id="year_end" name="year_name" placeholder="Enter Year End Date"
                                   className="form-control" onChange={this.setEnd}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.addYear}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    YearsReducer: state.YearsReducer
});
export default connect(
    mapStateToProps,
    {addYear}
)(AddEditYear);
