import React, {Component} from "react"
import '../../../assets/css/admin_css.css'

export class SideList extends Component {
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
                                                    <li><a href="#" onClick={this.props.getLinkNameInSideNavigation}>All Users</a></li>
                                                    <li><a href="#"onClick={this.props.getLinkNameInSideNavigation}>Add Edit User</a></li>
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
                                                    <li><a href="#" onClick={this.props.getLinkNameInSideNavigation}>All Semesters</a></li>
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
                                                    <li><a href="#" onClick={this.props.getLinkNameInSideNavigation}>All Years</a></li>
                                                    <li><a href="#">Add Edit</a></li>
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