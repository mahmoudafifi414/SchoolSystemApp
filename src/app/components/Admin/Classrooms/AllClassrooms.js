import React, {Component} from "react"
import {connect} from 'react-redux'
import {getClassrooms, updatePaginationData} from "../../../actions/ClassroomsActions";
import {getLinkNameInSideNavigation} from '../../../actions/ComponentRendererAction'

class AllClassrooms extends Component {
    componentDidMount() {
        this.getClassrooms()
    }

    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.currentTarget.id, e.currentTarget.className);
    };
    getClassrooms = e => {
        typeof e !== 'undefined' ? this.props.getClassrooms(e.target.value) : this.props.getClassrooms();
    };
    updatePaginationData = e => {
        e.preventDefault();
        const urlLinkForApi = this.props.ClassroomsReducer.classroomsPagination.first_page_url.split("?");
        this.props.updatePaginationData(urlLinkForApi[0], e.target.text)
    };

    render() {
        const {classroomsPagination} = this.props.ClassroomsReducer;
        if (typeof classroomsPagination.data !== 'undefined') {
            return (
                <div>
                    <div className="form-group col-sm-2">
                        <select onChange={this.getClassrooms} className="form-control">
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {classroomsPagination.data.map((classroom) => (
                            <tr key={classroom.id}>
                                <th scope="row">{classroom.id}</th>
                                <td>{classroom.name}</td>
                                <td>
                                    <button className="btn btn-dark"><span
                                        className="glyphicon glyphicon-pencil"></span></button>
                                    <button className="btn btn-danger"><span
                                        className="glyphicon glyphicon-remove"></span></button>
                                    <button onClick={this.getLinkNameInSideNavigation} id="classroom_info"
                                            className={"btn btn-info " + classroom.id}><span
                                        className="glyphicon glyphicon-cog"></span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ul className="pagination">
                        {[...Array(classroomsPagination.last_page).keys()].map((i) => (
                            classroomsPagination.current_page == i + 1 ?
                                <li className="active" key={i + 1}><a
                                    onClick={this.updatePaginationData} href='#'>{i + 1}</a></li> :
                                <li key={i + 1}><a onClick={this.updatePaginationData} href="#">{i + 1}</a></li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return <div>Loading...........</div>
        }
    }
}

const mapStateToProps = state => ({
    ClassroomsReducer: state.ClassroomsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer
});

export default connect(
    mapStateToProps,
    {getClassrooms, updatePaginationData, getLinkNameInSideNavigation}
)(AllClassrooms);