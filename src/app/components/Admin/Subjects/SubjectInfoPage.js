import React, {Component} from "react"
import {connect} from 'react-redux'
import {getRelationData} from "../../../actions/SubjectActions";
import '../../../../assets/css/year_info.css'
import {getLinkNameInSideNavigation} from '../../../actions/ComponentRendererAction'

class SubjectInfoPage extends Component {

    componentDidMount = () => {
        const {relationsData} = this.props.SubjectReducer;
        const subjectId = this.props.ComponentRendererReducer.componentMetaData;
        this.props.getRelationData(subjectId);
    };
    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.target.id, e.target.className);
    };

    render() {
        const subjectId = this.props.ComponentRendererReducer.componentMetaData;
        const {relationsData} = this.props.SubjectReducer;
        const headerStyle = {
            marginLeft: 275
        };
        if (relationsData.data) {
            return (
                <div className="row">
                    <h1 style={headerStyle}>( {relationsData.data.name} )</h1>
                    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile ">
                            <a href="#">
                                <div className="circle-tile-heading dark-blue"><i
                                    className="fas fa-school  fa-fw fa-3x"></i></div>
                            </a>
                            <div className="circle-tile-content dark-blue">
                                <div className="circle-tile-description text-faded">Teachers</div>
                                <div className="circle-tile-number text-faded ">
                                    {relationsData.data.teachers.length}
                                </div>
                                <a onClick={this.getLinkNameInSideNavigation} id='subject_teachers'
                                   className={"btn circle-tile-footer " + subjectId}>More Info<i
                                    className={"fa fa-chevron-circle-right " + subjectId}></i></a>
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
    SubjectReducer: state.SubjectReducer,
    ComponentRendererReducer: state.ComponentRendererReducer
});

export default connect(
    mapStateToProps,
    {getRelationData, getLinkNameInSideNavigation}
)(SubjectInfoPage);
