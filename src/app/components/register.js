import React, {Component} from "react"
import {form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import {connect} from 'react-redux'
import {registerAction} from "../actions/UserActions";
import {Redirect} from 'react-router-dom'

class register extends Component {
    state = {
        email: '',
        phoneNumber:'',
        password: ''
    }
    setEmail = e => {
        this.setState({email: e.target.value})
    }
    setPhone=e=>{
        this.setState({phoneNumber: e.target.value})
     }
    setPassword = e => {
        this.setState({password: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();

        const newLogin = {
            email: this.state.email,
            phoneNumber:this.state.phoneNumber,
            password: this.state.password
        };
        // login
        this.props.registerAction(newLogin);
    };

    render() {
        let label;
        const labelStyle = {
            color: 'red',
        };
        if (this.props.UserReducer.auth === 'yes') {
            return <Redirect to='/home'/>
        } else if (this.props.UserReducer.auth === 'no' && this.props.UserReducer.message.length > 0){
            label = <label style={labelStyle}>{this.props.UserReducer.message}</label>
        }
        return (
            <div className="Login">
                <form onSubmit={this.onSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            onChange={this.setEmail}
                        />
                    </FormGroup>
                    <FormGroup controlId="phoneNumber" bsSize="large">
                        <ControlLabel>phone number</ControlLabel>
                        <FormControl
                            type="number"
                            onChange={this.setPhone}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            onChange={this.setPassword}
                            type="password"
                        />
                    </FormGroup>
                    <Button bsSize="large" type="submit">
                        Register
                    </Button>
                    {label}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});
export default connect(
    mapStateToProps,
    {registerAction}
)(register);