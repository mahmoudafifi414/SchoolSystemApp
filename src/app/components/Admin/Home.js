import React, {Component} from 'react'
import {SideList} from './SideList'
import AllUsers from './Users/AllUsers'
import AddEditUser from './Users/AddEditUser'
import AllSemesters from './Semesters/AllSemesters'
import AllYears from './Years/AllYears'

export class Home extends Component {
    constructor() {
        super();
        this.state = {componentToRender: <AllUsers getLinkNameInSideNavigation={this.getLinkNameInSideNavigation}/>};
    }

    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        const {text} = e.target;
        const userId = e.target.id ? e.target.id : 0;
        switch (text.trim()) {
            case 'All Users':
                this.setState({
                    componentToRender: <AllUsers getLinkNameInSideNavigation={this.getLinkNameInSideNavigation}/>
                });
                break;
            case 'Classrooms':
                this.setState({componentToRender: <Classrooms/>});
                break;
            case 'All Semesters':
                this.setState({componentToRender: <AllSemesters/>});
                break;
            case 'All Years':
                this.setState({componentToRender: <AllYears/>});
                break;
            case 'Add Edit User':
                this.setState({componentToRender: <AddEditUser/>});
                break;
            case 'Edit User':
                this.setState({componentToRender: <AddEditUser actionType="edit" userId={userId}/>});
                break;
            default:
                this.setState({componentToRender: <AllUsers/>});
                break;

        }
    }

    render() {
        return (
            <div>
                <nav className="nav">
                </nav>
                <div>
                    <SideList getLinkNameInSideNavigation={this.getLinkNameInSideNavigation}/>
                    <div className="col-md-10 content">
                        {this.state.componentToRender}
                    </div>
                </div>
            </div>
        )
    }
}