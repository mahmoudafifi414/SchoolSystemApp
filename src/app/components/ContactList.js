import React, {Component} from "react"
import {connect} from 'react-redux'
import '../../assets/css/contact_list.css'
import {getUsersOfSameNetwork} from "../actions/UserActions"

export class ContactList extends Component {
    componentDidMount() {
        this.props.getUsersOfSameNetwork();
    }

    render() {
        const {usersOfSameNetwork}=this.props.UserReducer;
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-offset-3 col-sm-6">
                    <div className="panel panel-default custom-panel">
                        <div className="panel-heading c-list">
                            <span className="title">Your Network</span>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <div className="input-group c-search">
                                    <input type="text" className="form-control" id="contact-list-search"/>
                                    <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><span
                                    className="glyphicon glyphicon-search text-muted"></span></button>
                            </span>
                                </div>
                            </div>
                        </div>

                        <ul className="list-group" id="contact-list">
                            {usersOfSameNetwork.map((user)=>(
                            <li key={user.id} className="list-group-item">
                                <div className="col-xs-12 col-sm-3">
                                    <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens"
                                         className="img-responsive img-circle"/>
                                </div>
                                <div className="col-xs-12 col-sm-9">
                                    <span className="name">{user.name}</span><br/>
                                    <span class="badge">Teacher</span><br/>
                                    <span className="glyphicon glyphicon-map-marker text-muted c-info"
                                          data-toggle="tooltip"
                                          title="5842 Hillcrest Rd"></span>
                                    <span className="visible-xs"> <span
                                        className="text-muted">5842 Hillcrest Rd</span><br/></span>
                                    <span className="glyphicon glyphicon-earphone text-muted c-info"
                                          data-toggle="tooltip"
                                          title="(870) 288-4149"></span>
                                    <span className="visible-xs"> <span
                                        className="text-muted">(870) 288-4149</span><br/></span>
                                    <span className="fa fa-comments text-muted c-info" data-toggle="tooltip"
                                          title="scott.stevens@example.com"></span>
                                    <span className="visible-xs"> <span
                                        className="text-muted">scott.stevens@example.com</span><br/></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

export default connect(
    mapStateToProps,
    {getUsersOfSameNetwork}
)(ContactList);