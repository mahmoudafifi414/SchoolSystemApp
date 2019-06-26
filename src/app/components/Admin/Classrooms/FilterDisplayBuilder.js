import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRelatedFilterData, detachTeacherFromClassroom} from '../../../actions/ClassroomsActions'

class FilterDisplayBuilder extends Component {
    constructor(props) {
        super();
    }

    componentDidMount = () => {
        const data = this.props.data;
        this.props.getRelatedFilterData(data)
    };
    detachTeacherFromClassroom = (e) => {
        const teacherId = e.currentTarget.id.split('_')[1];
        const params = {
            yearId: this.props.data.yearId,
            classroomId: this.props.data.classroomId,
            teacherId: teacherId
        };
        this.props.detachTeacherFromClassroom(params);
    };

    render() {
        const {filteredData} = this.props.ClassroomsReducer;
        const i = 0;
        if (typeof filteredData !== 'undefined' && typeof filteredData.tableColumns !== 'undefined') {
            return (
                <div>
                    <h1 style={{textAlign: 'center'}}>{this.props.data.optionName}</h1>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {filteredData.tableColumns.map((col) => (
                                <th key={col} scope="col">{col}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.tableData.length > 0 ?
                            filteredData.tableData.map((data) => (
                                <tr key={data[0]}>
                                    {filteredData.tableColumns.map((col) => (
                                        col != 'Action' ?
                                            <td key={data[col]} scope="col">{data[col]}</td>
                                            : <td>
                                                <button id={'edit_' + data['Id']} className="btn btn-primary">Edit</button>
                                                <button onClick={this.detachTeacherFromClassroom}
                                                        id={'detach_' + data['Id']} className="btn btn-primary">detach
                                                </button>
                                            </td>
                                    ))}
                                </tr>
                            ))
                            :

                            <tr>
                                {this.props.data.optionName ?
                                    <td colSpan={filteredData.tableColumns.length} style={{textAlign: 'center'}}>There
                                        is no Data available</td>
                                    : <td></td>}
                            </tr>

                        }
                        </tbody>
                    </table>
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
    {getRelatedFilterData, detachTeacherFromClassroom})
(FilterDisplayBuilder);