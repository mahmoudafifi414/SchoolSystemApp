import React, {Component} from "react"
import {connect} from 'react-redux'

class AddEditUser extends Component {
    componentDidMount() {
        this.props.getDataForAddUser();
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                           placeholder=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"
                           placeholder=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="classroom">Classroom</label>
                    <select className="form-control" id="classroom">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="roles">Roles</label>
                    <select className="form-control" id="roles">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

export default connect(
    mapStateToProps,
    {}
)(AddEditUser);