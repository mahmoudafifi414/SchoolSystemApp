import React, {Component} from "react"
import {connect} from 'react-redux'
import {getRelationData} from "../../../actions/YearActions";
import '../../../../assets/css/year_info.css'
import {getLinkNameInSideNavigation} from '../../../actions/ComponentRendererAction'

class ClassroomInfoPage extends Component {

    componentDidMount = () => {
    };
    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.target.id, e.target.className);
    };

    render() {
        const classroomId = this.props.ComponentRendererReducer.componentMetaData;
        /*const {relationsData} = this.props.YearsReducer;
        const headerStyle = {
            marginLeft: 275
        };*/
        return (
            <div className="row">
                {/*<h1 style={headerStyle}>Classroom Of ( {relationsData.data.name} )</h1>*/}
                <div className="col-lg-2 col-sm-6">
                    <div className="circle-tile ">
                        <a href="#">
                            <div className="circle-tile-heading dark-blue"><i
                                className="fas fa-user  fa-fw fa-3x"></i></div>
                        </a>
                        <div className="circle-tile-content dark-blue">
                            <div className="circle-tile-description text-faded">Assign Subject</div>
                            <a onClick={this.getLinkNameInSideNavigation} id='classroom_subjects'
                               className={"btn circle-tile-footer " + classroomId}>Take Action<i
                                className="fa fa-chevron-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>)
    }
}


const mapStateToProps = state => ({
    YearsReducer: state.YearsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer,
    ClassroomsReducer: state.ClassroomsReducer
});

export default connect(
    mapStateToProps,
    {getLinkNameInSideNavigation}
)(ClassroomInfoPage);
