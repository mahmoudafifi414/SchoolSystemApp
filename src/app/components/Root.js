import React, {Component} from "react";
import {render} from "react-dom"
import Header from "./Header"
import Login from "./Login";
import register from "./register";
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from "./Logout";
import {Home} from "./Admin/Home";

class Root extends Component {
    render() {
        let authRoute;
        if (!localStorage.getItem('user-token')) {
            authRoute = false
        } else {
            authRoute = true
        }
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        <Header/>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xs-offset-3">
                            <Route path="/login" component={Login}/>
                        </div>
                        <Route path="/register" component={register}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/admin" component={Home}/>
                        {/*<Route path="/personaldetails" component={PersonalDetails}/>*/}
                    </div>
                    {authRoute ?
                        <div className="row">
                            {/*<div className="col-md-2">
                                {<ContactList/>}
                            </div>
                            <div className="col-md-10">
                                <CreatePost/>
                                <ChatList/>
                            </div>*/}
                        </div> : ''}
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});
export default connect(
    mapStateToProps,
    {}
)(Root);
