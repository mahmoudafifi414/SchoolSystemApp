import React, {Component} from "react"
import '../../../assets/css/admin_css.css'

export class sideList extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                </nav>
                <div>
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
                                            <li><a href="#"><span className="glyphicon glyphicon-plane"></span> Active
                                                Link</a>
                                            </li>
                                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Link</a>
                                            </li>

                                            <li className="panel panel-default" id="dropdown">
                                                <a data-toggle="collapse" href="#dropdown-lvl1">
                                                    <span className="glyphicon glyphicon-user"></span> Sub Level <span
                                                    className="caret"></span>
                                                </a>

                                                <div id="dropdown-lvl1" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <ul className="nav navbar-nav">
                                                            <li><a href="#">Link</a></li>
                                                            <li><a href="#">Link</a></li>
                                                            <li><a href="#">Link</a></li>

                                                            <li className="panel panel-default" id="dropdown">
                                                                <a data-toggle="collapse" href="#dropdown-lvl2">
                                                                    <span className="glyphicon glyphicon-off"></span>
                                                                    Sub
                                                                    Level
                                                                    <span className="caret"></span>
                                                                </a>
                                                                <div id="dropdown-lvl2"
                                                                     className="panel-collapse collapse">
                                                                    <div className="panel-body">
                                                                        <ul className="nav navbar-nav">
                                                                            <li><a href="#">Link</a></li>
                                                                            <li><a href="#">Link</a></li>
                                                                            <li><a href="#">Link</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li><a href="#"><span className="glyphicon glyphicon-signal"></span>
                                                Link</a>
                                            </li>

                                        </ul>
                                    </div>
                                </nav>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 content">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Dashboard
                            </div>
                            <div className="panel-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}