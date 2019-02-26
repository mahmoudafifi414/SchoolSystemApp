import React, {Component} from "react"
import {connect} from 'react-redux'
import {addNewUser, getDataForAddUser, getDataForEditUser} from '../../../actions/UserActions'

class AddEditUser extends Component {
    constructor() {
        super();
        this.state = {showHideElement: ''};
    }

    componentDidMount() {
        if (this.props.actionType == 'edit') {
            this.props.getDataForEditUser(this.props.userId)
        }
        this.props.getDataForAddUser()
    }

    addNewUser() {
        this.props.addNewUser();
    }

    showHide = (e) => {
        e.preventDefault();
        const index = e.nativeEvent.target.selectedIndex;
        const text = e.nativeEvent.target[index].text;
        switch (text) {
            case 'student':
                this.setState({showHideElement: 'student'});
                break;
            case 'teacher':
                this.setState({showHideElement: 'teacher'});
                break;
            default:
                this.setState({showHideElement: ''});
                break;
        }
    }

    render() {
        const {dataToAddUser} = this.props.UserReducer;
        if (Object.keys(dataToAddUser).length) {
            return (
                <form>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"
                               placeholder=""/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"
                               placeholder=""/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="roles">Roles</label>
                        <select onChange={this.showHide} className="form-control" id="roles">
                            <option></option>
                            {dataToAddUser.roles.map((role) => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))
                            }
                        </select>
                    </div>
                    {this.state.showHideElement == 'student' ?
                        <div className="form-group col-md-6">
                            <label htmlFor="roles">Academic Year</label>
                            <select className="form-control" id="year">
                                <option></option>
                                {dataToAddUser.years.map((year) => (
                                    <option key={year.id} value={year.id}>{year.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        : ''}
                    {this.state.showHideElement == 'student' ?
                        <div className="form-group col-md-6">
                            <label htmlFor="classroom">Classroom</label>
                            <select className="form-control" id="classroom">
                                <option></option>
                                {dataToAddUser.classrooms.map((classroom) => (
                                    <option key={classroom.id} value={classroom.id}>{classroom.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        : ''}
                    {this.state.showHideElement == 'teacher' ?
                        <div className="form-group col-md-6">
                            <label htmlFor="classroom">Subjects</label>
                            <select className="form-control" id="subject">
                                <option></option>
                                {dataToAddUser.subjects.map((subject) => (
                                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        : ''}
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="country">Country</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control"/>
                    </div>
                </form>
            )
        }
        else {
            return <div>Loading...........</div>
        }
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

export default connect(
    mapStateToProps,
    {getDataForAddUser, addNewUser,getDataForEditUser}
)(AddEditUser);