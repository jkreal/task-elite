import React from "react";
import "./User.css";

const User = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
              
    	</div>
        <div>
            <ul>
                <li>Name: 
                    {props.name}
                </li> 
            </ul>
        </div>
  </div>
);

export default User;