import React, {Component} from "react"
import {form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import {connect} from 'react-redux'
import {loginAction} from "../actions/UserActions";
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    setEmail = e => {
        this.setState({email: e.target.value})
    }
    setPassword = e => {
        this.setState({password: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();

        const newLogin = {
            email: this.state.email,
            password: this.state.password
        };
        // login
        this.props.loginAction(newLogin);
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
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            onChange={this.setPassword}
                            type="password"
                        />
                    </FormGroup>
                    <Button bsSize="large" type="submit">
                        Login
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
    {loginAction}
)(Login);