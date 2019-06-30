import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRelatedFilterData} from '../../../actions/ClassroomsActions'
import ClassroomTeachers from "./CustomStrategies/ClassroomTeachers";

class FilterDisplayBuilder extends Component {
    constructor(props) {
        super();
        this.state = {
            showTeachersModal: false
        };
    }

    componentDidMount = () => {
        const data = this.props.data;
        this.props.getRelatedFilterData(data)
    };


    render() {
        const {filteredData} = this.props.ClassroomsReducer;
        const i = 0;
        if (typeof filteredData !== 'undefined' && typeof filteredData.tableColumns !== 'undefined') {
            return (
                <div>
                    <h1 style={{textAlign: 'center'}}>{this.props.data.optionName}</h1>
                    <ClassroomTeachers data={this.props.data} filteredData={filteredData}/>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => ({
    ClassroomsReducer: state.ClassroomsReducer
});

export default connect(mapStateToProps,
    {getRelatedFilterData})
(FilterDisplayBuilder);