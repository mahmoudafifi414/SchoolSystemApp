import React, {Component} from "react"
import {connect} from 'react-redux'
import {addNewUser, getDataForAddUser, getDataForEditUser} from '../../../actions/UserActions'

class AddEditUser extends Component {
    constructor() {
        super();
        this.state = {
            showHideElement: '',
            roleName: '',
            name: '',
            email: '',
            password: '',
            roles: '',
            subject: '',
            phoneNumber: '',
            homePhoneNumber: '',
            age: '',
            country: '',
            city: '',
            address: '',
            year: '',
            classroom: ''
        };
    }

    componentDidMount() {
        if (this.props.actionType == 'edit') {
            this.props.getDataForEditUser(this.props.userId)
        }
        this.props.getDataForAddUser()
    }

    setName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
    };
    setEmail = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    };
    setPassword = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    };
    setRoles = (e) => {
        e.preventDefault();
        this.showHide(e);
        this.setState({
            roles: e.target.value
        })
    };
    setSubject = (e) => {
        e.preventDefault();
        this.setState({
            subject: e.target.value
        })
    };
    setPhoneNumber = (e) => {
        e.preventDefault();
        this.setState({
            phoneNumber: e.target.value
        })
    };
    setHomePhoneNumber = (e) => {
        e.preventDefault();
        this.setState({
            homePhoneNumber: e.target.value
        })
    };
    setAge = (e) => {
        e.preventDefault();
        this.setState({
            age: e.target.value
        })
    };
    setCountry = (e) => {
        e.preventDefault();
        this.setState({
            country: e.target.value
        })
    };
    setCity = (e) => {
        e.preventDefault();
        this.setState({
            city: e.target.value
        })
    };
    setAddress = (e) => {
        e.preventDefault();
        this.setState({
            address: e.target.value
        })
    };
    setYear = (e) => {
        e.preventDefault();
        this.setState({
            year: e.target.value
        })
    };
    setClassroom = (e) => {
        e.preventDefault();
        this.setState({
            classroom: e.target.value
        })
    };


    addNewUser() {

    }

    saveUser = (e) => {
        e.preventDefault();
        this.props.addNewUser(this.state);
    };
    showHide = (e) => {
        e.preventDefault();
        const index = e.nativeEvent.target.selectedIndex;
        const text = e.nativeEvent.target[index].text;
        this.setState({roleName: text});
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
    };

    render() {
        const {dataToAddUser} = this.props.UserReducer;
        if (Object.keys(dataToAddUser).length) {
            return (
                <form>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input onChange={this.setName} type="text" className="form-control" id="name"
                               placeholder=""/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email address</label>
                        <input onChange={this.setEmail} type="email" className="form-control" id="email"
                               placeholder=""/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Password</label>
                        <input onChange={this.setPassword} type="password" className="form-control" id="password"
                               placeholder=""/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="roles">Roles</label>
                        <select onChange={this.setRoles} className="form-control" id="roles">
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
                            <select onChange={this.setYear} className="form-control" id="year">
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
                            <select onChange={this.setClassroom} className="form-control" id="classroom">
                                <option></option>
                                {dataToAddUser.classrooms.map((classroom) => (
                                    <option key={classroom.id} value={classroom.id}>{classroom.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        : ''}

                    <div className="form-group col-md-6">
                        <label htmlFor="classroom">Phone Number</label>
                        <input onChange={this.setPhoneNumber} type="text" className="form-control"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="classroom">Home Phone Number</label>
                        <input onChange={this.setHomePhoneNumber} type="text" className="form-control"/>
                    </div>

                    {this.state.showHideElement == 'teacher' ?
                        <div className="form-group col-md-6">
                            <label htmlFor="classroom">Subjects</label>
                            <select onChange={this.setSubject} className="form-control" id="subject">
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
                        <input onChange={this.setAge} type="number" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="country">Country</label>
                        <input onChange={this.setCountry} type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input onChange={this.setCity} type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address</label>
                        <input onChange={this.setAddress} type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-12">
                        <button onClick={this.saveUser} type="text" className="btn btn-md btn-primary">Save</button>
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
    {getDataForAddUser, addNewUser, getDataForEditUser}
)(AddEditUser);