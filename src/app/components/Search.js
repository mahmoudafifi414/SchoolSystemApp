import React, {Component} from "react"
import {connect} from 'react-redux'
import {showHideForm, showHideSearch, searchContacts} from "../actions/NumbersActions";

class Search extends Component {
    searchContacts = e => {
        this.props.searchContacts(e.target.value)
    }

    render() {
        let searchForm;
        const {showHideSearch} = this.props.phoneNumbers;
        if (showHideSearch == 'show') {
            searchForm =
                <form role="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Search</label>
                        <input className="form-control" onChange={this.searchContacts} type="text"/>
                    </div>
                </form>

        }
        return (
            <div>
                {searchForm}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    phoneNumbers: state.phoneNumbers
});
export default connect(
    mapStateToProps,
    {showHideForm, showHideSearch, searchContacts}
)(Search);