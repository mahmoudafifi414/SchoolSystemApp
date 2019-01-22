import React, {Component} from "react"
import {Nav, NavItem} from "react-bootstrap"
import {connect} from 'react-redux'
import {logoutAction} from "../actions/UserActions";
import {Redirect} from "react-router-dom"

class Logout extends Component {
    componentDidMount() {
        this.props.logoutAction()
    }

    render() {
        return <Redirect to='/login'/>
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});
export default connect(
    mapStateToProps,
    {logoutAction}
)(Logout);