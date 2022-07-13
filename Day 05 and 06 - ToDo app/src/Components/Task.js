import React, { Component } from "react";
import "../Components/Task.css"


class Task extends Component {
    render() {
        return (
            <>
            <div    className="main-tasks">
                <div className="task"><p>{}</p></div>
                <button type="button" className="task-button btn btn__danger">
                    Delete
                </button>
            </div>
            </>
        )
    }
}

export default Task;