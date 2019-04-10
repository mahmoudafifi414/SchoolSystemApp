import React, {Component} from 'react'
import SideList from './SideList'
import {connect} from 'react-redux'
import AllUsers from './Users/AllUsers'
import AllYears from './Years/AllYears'
import InfoPage from './Years/InfoPage'
import YearsClassrooms from './Years/YearsClassrooms'
import AllClassrooms from "./Classrooms/AllClassrooms";
import ClassroomDetails from "./Classrooms/ClassroomDetails";
import YearSemester from "./Years/YearSemester";

class Home extends Component {
    render() {
        const Components = {
            AllUsers: AllUsers,
            AllYears: AllYears,
            InfoPage: InfoPage,
            YearsClassrooms: YearsClassrooms,
            AllClassrooms: AllClassrooms,
            ClassroomDetails: ClassroomDetails,
            YearSemester: YearSemester
        };
        const {componentToRender} = this.props.ComponentRendererReducer;
        const Component = Components[componentToRender];
        return (
            <div>
                <nav className="nav">
                </nav>
                <div>
                    <SideList/>
                    <div className="col-md-10 content">
                        <Component/>
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
    {}
)(Home);