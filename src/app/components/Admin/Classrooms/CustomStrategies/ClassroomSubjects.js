import React, {Component} from 'react'
import {connect} from 'react-redux'

class ClassroomSubjects extends Component {
    render() {
        return (
            <div>
                <h1>Subjects</h1>
                <div className="col-md-2 form-group">
                    <select className="form-control">
                        <option>First</option>
                    </select>
                </div>
            </div>

        );
    }
}

export default ClassroomSubjects