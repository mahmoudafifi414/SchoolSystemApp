import React, {Component} from "react"
import {connect} from 'react-redux'
import {getAllYears, updatePaginationData} from "../../../actions/YearActions";
import {getLinkNameInSideNavigation} from '../../../actions/ComponentRendererAction'

class AllYears extends Component {
    componentDidMount() {
        this.getAllYears()
    }

    getLinkNameInSideNavigation = (e) => {
        e.preventDefault();
        this.props.getLinkNameInSideNavigation(e.currentTarget.id, e.currentTarget.className);
    };
    getAllYears = e => {
        typeof e !== 'undefined' ? this.props.getAllYears(e.target.value) : this.props.getAllYears();
    };
    updatePaginationData = e => {
        e.preventDefault();
        const urlLinkForApi = this.props.YearsReducer.yearsPagination.first_page_url.split("?");
        this.props.updatePaginationData(urlLinkForApi[0], e.target.text)
    };

    render() {
        const {yearsPagination} = this.props.YearsReducer;
        console.log(yearsPagination)
        if (typeof yearsPagination.data !== 'undefined') {
            return (
                <div>
                    <div className="form-group col-sm-2">
                        <select onChange={this.getAllYears} className="form-control">
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
                            <th scope="col">start date</th>
                            <th scope="col">end date</th>
                            <th scope="col">actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {yearsPagination.data.map((year) => (
                            <tr key={year.id}>
                                <th scope="row">{year.id}</th>
                                <td>{year.name}</td>
                                <td>{year.start_date}</td>
                                <td>{year.end_date}</td>
                                <td>
                                    <button className="btn btn-dark"><span
                                        className="glyphicon glyphicon-pencil"></span></button>
                                    <button className="btn btn-danger"><span
                                        className="glyphicon glyphicon-remove"></span></button>
                                    <button onClick={this.getLinkNameInSideNavigation} id="year_info"
                                            className={"btn btn-info " + year.id}><span
                                        className="glyphicon glyphicon-cog"></span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ul className="pagination">
                        {[...Array(yearsPagination.last_page).keys()].map((i) => (
                            yearsPagination.current_page == i + 1 ?
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
    YearsReducer: state.YearsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer
});

export default connect(
    mapStateToProps,
    {getAllYears, updatePaginationData, getLinkNameInSideNavigation}
)(AllYears);