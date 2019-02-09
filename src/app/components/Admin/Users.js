import React, {Component} from "react"
import {connect} from 'react-redux'
import {getUsersOfSameNetwork} from "../../actions/UserActions";

export class Users extends Component {
    componentDidMount() {
        this.props.getUsersOfSameNetwork();
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">Classroom</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </table>
                <ul className="pagination">
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

export default connect(
    mapStateToProps,
    {getUsersOfSameNetwork}
)(Users);