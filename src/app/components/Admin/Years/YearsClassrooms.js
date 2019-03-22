import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getClassRoomsForYear} from '../../../actions/YearActions';

class YearsClassrooms extends Component {
    componentDidMount = () => {
        const yearId = this.props.ComponentRendererReducer.componentMetaData;
    };

    render() {
        const yearInfoWithRelations = this.props.YearsReducer.relationsData;
        const buttonStyle = {
            marginLeft: 142
        };
        return (
            <div className="row">
                <div className="col-md-8">
                    <ol>
                        {yearInfoWithRelations.data.classrooms.map((classroom) =>
                            <li key={classroom.id} className="list-item">
                                {classroom.name}
                                <button style={buttonStyle} className="btn btn-danger">
                                    <span className="glyphicon glyphicon-minus"></span>
                                </button>
                            </li>
                        )}
                    </ol>
                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active">Classrooms</a>
                        <div className="list-group-item justify-content-between">
                            <button style={buttonStyle} className="btn btn-success">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    YearsReducer: state.YearsReducer,
    ComponentRendererReducer: state.ComponentRendererReducer,
});

export default connect(
    mapStateToProps,
    {getClassRoomsForYear}
)(YearsClassrooms);