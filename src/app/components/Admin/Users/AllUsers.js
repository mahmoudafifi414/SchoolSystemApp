import React, {Component} from "react"
import {connect} from 'react-redux'
import {getUsersOfSameNetwork, updatePaginationData} from "../../../actions/UserActions";

class AllUsers extends Component {
    componentDidMount() {
        this.getUsersOfNetwork()
    }

    getUsersOfNetwork = e => {
        this.props.getUsersOfSameNetwork(typeof e !== 'undefined' ? e.target.value : null);
    }
    updatePaginationData = e => {
        e.preventDefault();
        const urlLinkForApi = this.props.UserReducer.usersOfSameNetwork.first_page_url.split("?");
        this.props.updatePaginationData(urlLinkForApi[0], e.target.text)
    };

    render() {
        const {usersOfSameNetwork} = this.props.UserReducer;
        if (typeof usersOfSameNetwork.data !== 'undefined') {
            return (
                <div>
                    <div className="form-group col-sm-2">
                        <select onChange={this.getUsersOfNetwork} className="form-control">
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">roles</th>
                            <th scope="col">action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {usersOfSameNetwork.data.map((user) => (
                            <tr key={user.id}>
                                <th scope="row"><a href="">{user.id}</a></th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.roles.map((role) => (
                                        <span key={role.id} className="badge">{role.name}</span>
                                    ))}
                                </td>
                                <td>
                                    <a onClick={this.props.getLinkNameInSideNavigation} id="edit_user" className={"btn btn-info "+user.id}>Edit User</a>
                                    <button type="button" className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ul className="pagination">
                        {[...Array(usersOfSameNetwork.last_page).keys()].map((i) => (
                            usersOfSameNetwork.current_page == i + 1 ?
                                <li className="active" key={i + 1}><a
                                    onClick={this.updatePaginationData} href='#'>{i + 1}</a></li> :
                                <li key={i + 1}><a onClick={this.updatePaginationData} href="#">{i + 1}</a></li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return <div>Loading...........</div>
        }
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

export default connect(
    mapStateToProps,
    {getUsersOfSameNetwork, updatePaginationData}
)(AllUsers);