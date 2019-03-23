import React, {Component} from "react"
import {connect} from 'react-redux'
import {getRelationData} from "../../../actions/YearActions";
import '../../../../assets/css/year_info.css'
import {getLinkNameInSideNavigation} from '../../../actions/ComponentRendererAction'
import {getClassrooms} from '../../../actions/ClassroomsActions';

class InfoPage extends Component {

    componentDidMount = () => {
        const {relationsData} = this.props.YearsReducer;
        if (relationsData.length == 0) {
            const yearId = this.props.ComponentRendererReducer.componentMetaData;
            this.props.getRelationData(yearId);
        }
        this.props.getClassrooms();
    };
    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.target.id, e.target.className);
    };

    render() {
        const yearId = this.props.ComponentRendererReducer.componentMetaData;
        const {relationsData} = this.props.YearsReducer;
        const headerStyle = {
            marginLeft: 275
        };
        if (relationsData.data) {
            return (
                <div className="row">
                    <h1 style={headerStyle}>Year Of ( {relationsData.data.name} )</h1>
                    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile ">
                            <a href="#">
                                <div className="circle-tile-heading dark-blue"><i
                                    className="fas fa-school  fa-fw fa-3x"></i></div>
                            </a>
                            <div className="circle-tile-content dark-blue">
                                <div className="circle-tile-description text-faded">Classrooms</div>
                                <div className="circle-tile-number text-faded ">
                                    {relationsData.data.classrooms.length}
                                </div>
                                <a onClick={this.getLinkNameInSideNavigation} id='year_classrooms'
                                   className={"btn circle-tile-footer " + yearId}>More Info<i
                                    className="fa fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>)
        } else {
            return <div>Loading...........</div>
        }
    }
}


const mapStateToProps = state => ({
    YearsReducer: state.YearsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer,
    ClassroomsReducer: state.ClassroomsReducer
});

export default connect(
    mapStateToProps,
    {getRelationData, getLinkNameInSideNavigation, getClassrooms}
)(InfoPage);
