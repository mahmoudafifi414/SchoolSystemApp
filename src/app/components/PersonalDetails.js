import React, {Component} from "react"
import {Nav, NavItem} from "react-bootstrap"
import {connect} from 'react-redux'
import {getAuthUserInfo, updateAuthUserInfo} from '../actions/UserActions'

class PersonalDetails extends Component {
    componentDidMount = () => {

    }
    state = {
        fName: this.props.userReducer.authUserInfo.first_name,
        lName: this.props.userReducer.authUserInfo.last_name,
        mobilePhone: this.props.userReducer.authUserInfo.mobile_phone,
        email: this.props.userReducer.authUserInfo.email,
        location: this.props.userReducer.authUserInfo.location
    }
    setFName = e => {
        this.setState({fName: e.target.value})
    }
    setLName = e => {
        this.setState({lName: e.target.value})
    }
    setMobilePhone = e => {
        this.setState({mobilePhone: e.target.value})
    }
    setEmail = e => {
        this.setState({email: e.target.value})
    }
    setLocation = e => {
        this.setState({location: e.target.value})
    }
    updateAuthUserInfo = e => {
        e.preventDefault();
        const updatedData = {
            AuthUserId: localStorage.getItem('phone-manager-user-id'),
            fName: this.state.fName != null ? this.state.fName : this.props.userReducer.authUserInfo.first_name,
            lName: this.state.lName != null ? this.state.lName : this.props.userReducer.authUserInfo.last_name,
            mobilePhone: this.state.mobilePhone != null ? this.state.mobilePhone : this.props.userReducer.authUserInfo.mobile_phone,
            email: this.state.email != null ? this.state.email : this.props.userReducer.authUserInfo.email,
            location: this.state.location != null ? this.state.location : this.props.userReducer.authUserInfo.location
        }
        this.props.updateAuthUserInfo(updatedData)
    }

    render() {
        const headerStyle = {
            color: '#8e0606'
        }
        let updatedAlert;
        if (this.props.userReducer.updatedAuthUserInfo === 'ok') {
            updatedAlert =
                <div className="alert alert-success">
                    <strong>Updated!</strong> Your information updated successfully.
                </div>
        } else {
            updatedAlert = '';
        }

        const {showHidePersonalDetails} = this.props.phoneNumbers;
        const {authUserInfo} = this.props.userReducer;
        let personalDetails;
        if (showHidePersonalDetails == 'show') {
            personalDetails =
                <div className="bootstrap snippet">
                    <div className="row">
                        <div className="col-sm-10">
                            <h1 style={headerStyle}>{authUserInfo.first_name != null ?
                                authUserInfo.first_name.charAt(0).toUpperCase() + authUserInfo.first_name.slice(1) +
                                ' ' + authUserInfo.last_name.charAt(0).toUpperCase() + authUserInfo.last_name.slice(1) :
                                authUserInfo.email}</h1>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <hr/>
                            <ul className="list-group">
                                <li className="list-group-item text-muted">Statistics <i
                                    className="fa fa-dashboard fa-1x"></i></li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Contacts</strong></span>{authUserInfo.contacts.length}
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-7">
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                    <hr/>
                                    {updatedAlert}
                                    <form className="form" id="authUserInfoForm" name="authUserInfoForm"
                                          onSubmit={this.updateAuthUserInfo}>
                                        <div className="form-group">
                                            <div className="col-xs-6">
                                                <label htmlFor="first_name"><h4>First name</h4></label>
                                                <input type="text" className="form-control" name="first_name"
                                                       id="first_name"
                                                       title="enter your first name if any."
                                                       required="required"
                                                       defaultValue={authUserInfo.first_name}
                                                       onChange={this.setFName}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label htmlFor="last_name"><h4>Last name</h4></label>
                                                <input type="text" className="form-control" name="last_name"
                                                       id="las
                                                       t_name"
                                                       title="enter your last name if any."
                                                       required="required"
                                                       defaultValue={authUserInfo.last_name}
                                                       onChange={this.setLName}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <label htmlFor="mobile"><h4>Mobile</h4></label>
                                                <input type="text" className="form-control" name="mobile" id="mobile"
                                                       title="enter your mobile number if any."
                                                       required="required"
                                                       defaultValue={authUserInfo.mobile_phone}
                                                       onChange={this.setMobilePhone}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label htmlFor="email"><h4>Email</h4></label>
                                                <input type="email" className="form-control" name="email" id="email"
                                                       required="required"
                                                       defaultValue={authUserInfo.email}
                                                       onChange={this.setEmail}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label htmlFor="location"><h4>Location</h4></label>
                                                <input type="text" className="form-control" id="location"
                                                       title="enter a location"
                                                       required="required"
                                                       defaultValue={authUserInfo.location}
                                                       onChange={this.setLocation}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label htmlFor="password"><h4>Password</h4></label>
                                                <input type="password" className="form-control" name="password"
                                                       id="password"
                                                       title="enter your password."/>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label htmlFor="password2"><h4>Verify</h4></label>
                                                <input type="password" className="form-control" name="password2"
                                                       id="password2"
                                                       title="enter your password2."/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <br/>
                                                <button className="btn btn-lg btn-success"
                                                        onClick={this.updateAuthUserInfo} type="button"><i
                                                    className="glyphicon glyphicon-ok-sign"></i> Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        }
        return (
            <div>
                {personalDetails}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    phoneNumbers: state.phoneNumbers,
    userReducer: state.UserReducer
});
export default connect(
    mapStateToProps,
    {getAuthUserInfo, updateAuthUserInfo}
)(PersonalDetails);