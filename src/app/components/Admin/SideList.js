import React, {Component} from "react"
import '../../../assets/css/admin_css.css'
import {connect} from 'react-redux'
import {getLinkNameInSideNavigation} from '../../actions/ComponentRendererAction'

class SideList extends Component {
    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.target.id, 0);
    };

    render() {
        return (
            <div className="col-md-2 sidebar">
                <div className="row">
                    <div className="absolute-wrapper"></div>
                    <div className="side-menu">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="side-menu-container">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#"><span
                                        className="glyphicon glyphicon-dashboard"></span>
                                        Dashboard</a></li>
                                    <li className="panel panel-default" id="dropdown">
                                        <a data-toggle="collapse" href="#dropdown-lvl1">
                                            <span className="glyphicon glyphicon-user"></span>Users<span
                                            className="caret"></span>
                                        </a>
                                        <div id="dropdown-lvl1" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="nav navbar-nav">
                                                    <li><a href="#" id="all_users"
                                                           onClick={this.getLinkNameInSideNavigation}>All
                                                        Users</a></li>
                                                    <li><a href="#" id="add_user"
                                                           onClick={this.props.getLinkNameInSideNavigation}>Add User</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="panel panel-default" id="dropdown">
                                        <a data-toggle="collapse" href="#dropdown-lvl2">
                                            <span className="glyphicon glyphicon-user"></span>Semester<span
                                            className="caret"></span>
                                        </a>
                                        <div id="dropdown-lvl2" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="nav navbar-nav">
                                                    <li><a href="#" id="all_semesters"
                                                           onClick={this.getLinkNameInSideNavigation}>All
                                                        Semesters</a></li>
                                                    <li><a href="#">Add Edit</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="panel panel-default" id="dropdown">
                                        <a data-toggle="collapse" href="#dropdown-lvl3">
                                            <span className="glyphicon glyphicon-user"></span>Years<span
                                            className="caret"></span>
                                        </a>
                                        <div id="dropdown-lvl3" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="nav navbar-nav">
                                                    <li><a href="#" id="all_years"
                                                           onClick={this.getLinkNameInSideNavigation}>All
                                                        Years</a></li>
                                                    <li><a href="#">Add Edit</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="panel panel-default" id="dropdown">
                                        <a data-toggle="collapse" href="#dropdown-lvl4">
                                            <span className="glyphicon glyphicon-user"></span>Subjects<span
                                            className="caret"></span>
                                        </a>
                                        <div id="dropdown-lvl4" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="nav navbar-nav">
                                                    <li><a href="#" onClick={this.props.getLinkNameInSideNavigation}>All
                                                        Subjects</a></li>
                                                    <li><a href="#">Add Subject</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    ComponentRendererReducer: state.ComponentRendererReducer
});

export default connect(
    mapStateToProps,
    {getLinkNameInSideNavigation}
)(SideList);