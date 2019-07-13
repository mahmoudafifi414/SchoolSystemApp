import React, {Component} from "react"
import {connect} from 'react-redux'
import {addSubject} from "../../../actions/SubjectActions";

class AddEditSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            code: ''
        };
    }

    setName = (e) => {
        const name = e.currentTarget.value;
        this.setState({name: name});
    };
    setCode = (e) => {
        const code = e.currentTarget.value;
        this.setState({code: code});
    };
    addSubject = (e) => {
        e.preventDefault();
        this.props.addSubject(this.state);
    };


    render() {
        return (
            <div>
                {this.props.SubjectReducer.msg != '' ?
                    <div className="row">
                        <div className="form-group col-md-9">
                            <div style={{textAlign: 'center'}} className="alert alert-success" role="alert"
                                 id="alert">
                                {this.props.SubjectReducer.msg}
                            </div>
                        </div>
                    </div> : ''}

                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="year_name">Subject Name</label>
                        <input type="text" id="subject_name" name="subject_name" placeholder="Enter Subject Name"
                               className="form-control" onChange={this.setName}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="form-group col-md-6">
                        <label htmlFor="year_start">Subject Code</label>
                        <input type="text" id="subject_code" name="subject_code" placeholder="Enter Subject Code"
                               className="form-control" onChange={this.setCode}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.addSubject}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    SubjectReducer: state.SubjectReducer
});
export default connect(
    mapStateToProps,
    {addSubject}
)(AddEditSubject);

