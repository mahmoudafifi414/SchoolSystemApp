import React, {Component} from "react"
import {Button, ListGroup, ListGroupItem} from "react-bootstrap"
import {connect} from 'react-redux'
import {getContacts, searchContacts} from "../actions/NumbersActions";
import {MdDelete, MdModeEdit} from 'react-icons/md'

class Contacts extends Component {
    componentDidMount() {
        const data = {
            authUserId: localStorage.getItem('phone-manager-user-id')
        }
        this.props.getContacts(data);
    }

    searchContacts = e => {
        this.props.searchContacts(e.target.value)
    }

    render() {

        const {contacts, showHideContacts} = this.props.phoneNumbers;
        if (showHideContacts === 'hide') {
            return false
        }
        const buttonStyle = {
            'float': 'right',
            'marginTop': '-17px'
        }
        return (

            <ListGroup>
                <form role="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Search</label>
                        <input className="form-control" onChange={this.searchContacts} type="text"/>
                    </div>
                </form>
                {contacts.map((contact) => (
                    <ListGroupItem key={contact._id} header={contact.contacted_user}>
                        {contact.phone_number}
                        <Button style={buttonStyle} className=" btn btn-danger" onClick={this.deleteContact}
                                id={contact._id} type="button">
                            <MdDelete/>
                        </Button>
                        <Button style={buttonStyle} className=" btn btn-info" onClick={this.editContact}
                                id={contact._id} type="button">
                            <MdModeEdit/>
                        </Button>
                    </ListGroupItem>
                ))}
            </ListGroup>

        );

    }
}

const mapStateToProps = state => ({
    phoneNumbers: state.phoneNumbers
});
export default connect(
    mapStateToProps,
    {getContacts, searchContacts}
)(Contacts);