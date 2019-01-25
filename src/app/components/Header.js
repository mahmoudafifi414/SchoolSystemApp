import React, {Component} from "react"
import {MenuItem, Nav, Navbar, NavDropdown, NavItem, NavLink} from "react-bootstrap"
import {connect} from 'react-redux'
import {
    showHideChatList,
    showHideContacts,
    showHideForm,
    showHidePersonalDetails,
    showHideSearch
} from "../actions/NumbersActions";
import {getAuthUserInfo} from "../actions/UserActions";

class Header extends Component {
    componentDidMount = () => {
        this.showHideForm()
        const userInfoById = {
            authUserId: localStorage.getItem('phone-manager-user-id')
        }
        /*this.props.getAuthUserInfo(userInfoById)*/
    }

    showHideForm = () => {
        const {showHide} = this.props.phoneNumbers;
        const showHideFlag = showHide == 'hide' ? 'show' : 'hide'
        this.props.showHideForm('show')
        this.props.showHideSearch('hide')
        this.props.showHidePersonalDetails('hide')
        this.props.showHideContacts('hide')
        this.props.showHideChatList('hide')
    }
    showHideSearch = () => {
        const {showHideSearch} = this.props.phoneNumbers;
        this.props.showHideSearch('show')
        this.props.showHideForm('hide')
        this.props.showHidePersonalDetails('hide')
        this.props.showHideContacts('show')
        this.props.showHideChatList('hide')
    }
    showHidePersonalDetails = () => {
        const {showHidePersonalDetails} = this.props.phoneNumbers;
        const showHidePersonalDetailsFlag = showHidePersonalDetails == 'hide' ? 'show' : 'hide'
        this.props.showHidePersonalDetails(showHidePersonalDetailsFlag)
        this.props.showHideSearch('hide')
        this.props.showHideForm('hide')
        this.props.showHideContacts('hide')
        this.props.showHideChatList('hide')
    }
    showHideChatList = () => {
        const {showHideChatList} = this.props.phoneNumbers;
        const showHideChatListFlag = showHideChatList == 'hide' ? 'show' : 'hide'
        this.props.showHideChatList(showHideChatListFlag)
        this.props.showHideSearch('hide')
        this.props.showHideForm('hide')
        this.props.showHideContacts('hide')
        this.props.showHidePersonalDetails('hide')
    }

    render() {
        let nav;
        let auth = localStorage.getItem('user-token') ? 'yes' : 'no'
        const {authUserInfo} = this.props.userReducer;
        const userNameOrEmail = authUserInfo.hasOwnProperty('name') ? authUserInfo.name : localStorage.getItem('user-name')
        if (auth == 'yes') {
            nav = <Nav pullRight>
                <NavItem onClick={this.showHideForm}>
                    Feeds
                </NavItem>
                <NavItem onClick={this.showHideChatList}>
                    Inbox
                </NavItem>
                <NavDropdown eventKey={3} title={userNameOrEmail} id="basic-nav-dropdown">
                    <MenuItem href='/logout'>Logout</MenuItem>
                    <MenuItem href='/personal-details'>Personal Details</MenuItem>
                </NavDropdown>
            </Nav>
        } else {
            nav = <Nav pullRight>
                <NavItem href='/login'>
                    Login
                </NavItem>
                <NavItem href='/register'>
                    Register
                </NavItem>
            </Nav>
        }
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home">School System</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    {nav}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    userReducer: state.UserReducer,
    phoneNumbers: state.phoneNumbers
});

export default connect(
    mapStateToProps,
    {showHideContacts, showHideForm, showHideSearch, showHidePersonalDetails, showHideChatList, getAuthUserInfo}
)(Header);