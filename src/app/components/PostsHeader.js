import React, {Component} from "react"
import {Nav, NavItem} from "react-bootstrap"
import {connect} from 'react-redux'
import {
    showHideChatList,
    showHideContacts,
    showHideForm,
    showHidePersonalDetails,
    showHideSearch
} from "../actions/NumbersActions";

class PostsHeader extends Component {
    componentDidMount = () => {
          this.showHideForm()
    }

    showHideForm = () => {
        const {showHide} = this.props.phoneNumbers;
        const showHideFlag = showHide == 'hide' ? 'show' : 'hide'
        this.props.showHideForm(showHideFlag)
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
        return (
            <Nav bsStyle="tabs">
                <NavItem eventKey="1" onSelect={this.showHideForm}>
                    Posts
                </NavItem>
                <NavItem eventKey="2" onSelect={this.showHideSearch}>
                    Contacts
                </NavItem>
                <NavItem eventKey="4" onSelect={this.showHideChatList}>
                    ChatList
                </NavItem>
                <NavItem eventKey="3" onSelect={this.showHidePersonalDetails}>
                    Personal Details
                </NavItem>
            </Nav>

        );
    }
}

const mapStateToProps = state => ({
    phoneNumbers: state.phoneNumbers
});
export default connect(
    mapStateToProps,
    {showHideContacts, showHideForm, showHideSearch, showHidePersonalDetails, showHideChatList}
)(PostsHeader);