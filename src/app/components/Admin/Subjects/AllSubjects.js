import React, {Component} from "react"
import {connect} from 'react-redux'
import {getSubjects, updatePaginationData} from "../../../actions/SubjectActions";
import {getLinkNameInSideNavigation} from '../../../actions/ComponentRendererAction'

class AllSubjects extends Component {
    componentDidMount() {
        this.getSubjects()
    }

    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.currentTarget.id, e.currentTarget.className);
    };
    getSubjects = e => {
        typeof e !== 'undefined' ? this.props.getSubjects(e.target.value) : this.props.getSubjects();
    };
    updatePaginationData = e => {
        e.preventDefault();
        const urlLinkForApi = this.props.SubjectReducer.subjectsPagination.first_page_url.split("?");
        this.props.updatePaginationData(urlLinkForApi[0], e.target.text)
    };

    render() {
        const {subjectsPagination} = this.props.SubjectReducer;
        if (typeof subjectsPagination.data !== 'undefined') {
            return (
                <div>
                    <div className="form-group col-sm-2">
                        <select onChange={this.getSubjects} className="form-control">
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
                            <th scope="col">code</th>
                            <th scope="col">actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {subjectsPagination.data.map((subject) => (
                            <tr key={subject.id}>
                                <th scope="row">{subject.id}</th>
                                <td>{subject.name}</td>
                                <td>{subject.code}</td>
                                <td>
                                    <button className="btn btn-dark"><span
                                        className="glyphicon glyphicon-pencil"></span></button>
                                    <button className="btn btn-danger"><span
                                        className="glyphicon glyphicon-remove"></span></button>
                                    <button onClick={this.getLinkNameInSideNavigation} id="subject_info"
                                            className={"btn btn-info " + subject.id}><span
                                        className="glyphicon glyphicon-cog"></span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ul className="pagination">
                        {[...Array(subjectsPagination.last_page).keys()].map((i) => (
                            subjectsPagination.current_page == i + 1 ?
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
    SubjectReducer: state.SubjectReducer,
    ComponentRendererReducer: state.ComponentRendererReducer
});

export default connect(
    mapStateToProps,
    {getSubjects, updatePaginationData, getLinkNameInSideNavigation}
)(AllSubjects);