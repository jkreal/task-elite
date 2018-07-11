import React from "react";
import "./AddTaskButton.css";
import { Link } from 'react-router-dom';

const AddTaskButton = props => (
  // <div onClick={() => props.setClicked(props.id)} className="user">

  <div className="content">
    <ul>
    <div className="add-task-button active">
            <Link className="nav-link" to="/users">Add New Task</Link>
        </div>
      {/* <li>
        Description:
        {" " + props.description}
      </li> */}
    </ul>
  </div>
);

export default AddTaskButton;
