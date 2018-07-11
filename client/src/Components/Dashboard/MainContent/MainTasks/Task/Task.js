import React from "react";
import "./Task.css";

const Task = props => (
	// <div onClick={() => props.setClicked(props.id)} className="user">
	<div className="task">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
              
    	</div>
        <div className="task-content">
            <ul>
                <li>Task: 
                    {" " + props.task}
                </li> 
                <li>Description: 
                    {" " + props.description}
                </li> 
            </ul>
        </div>
  </div>
);

export default Task;