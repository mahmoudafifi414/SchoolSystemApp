import React, {Component} from 'react'
import {SideList} from './SideList'
import {Users} from './Users'
export class Home extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                </nav>
                <div>
                <SideList/>
                    <div className="col-md-10 content">
                        <Users/>
                    </div>
                </div>
            </div>
        )
    }
}