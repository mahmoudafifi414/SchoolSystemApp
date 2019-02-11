import React, {Component} from "react"
import {connect} from 'react-redux'
import {getAllSemesters,updatePaginationData} from "../../../actions/SemesterActions";

class AllSemesters extends Component {
    componentDidMount() {
        this.getAllSemesters()
    }

    getAllSemesters = e => {
        this.props.getAllSemesters(typeof e !== 'undefined' ? e.target.value : null);
    }
    updatePaginationData = e => {
        e.preventDefault();
        const urlLinkForApi = this.props.SemesterReducer.getAllSemesters.first_page_url.split("?");
        this.props.updatePaginationData(urlLinkForApi[0], e.target.text)
    };

    render() {
        const {allSemesters} = this.props.SemesterReducer;
        if (typeof allSemesters.data !== 'undefined') {
            return (
                <div>
                    <div className="form-group col-sm-2">
                        <select onChange={this.getAllSemesters} className="form-control">
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
                        </tr>
                        </thead>
                        <tbody>
                        {allSemesters.data.map((semester) => (
                            <tr key={semester.id}>
                                <th scope="row">{semester.id}</th>
                                <td>{semester.name}</td>
                                <td>{semester.start_date}</td>
                                <td>{semester.end_date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ul className="pagination">
                        {[...Array(allSemesters.last_page).keys()].map((i) => (
                            allSemesters.current_page == i + 1 ?
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
    SemesterReducer: state.SemesterReducer
});

export default connect(
    mapStateToProps,
    {getAllSemesters,updatePaginationData}
)(AllSemesters);