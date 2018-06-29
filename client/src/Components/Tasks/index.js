import React from "react";
import "./Tasks.css";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

const Tasks = props => (
<div>
	<Row>
		<h2 id="taskName">Task Name</h2>
	</Row>
	<Row>
		<h3 id="descriptionTitle">Description</h3>
		<p id="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas enim quisquam beatae reprehenderit quibusdam quis labore, officiis veritatis quod quasi corrupti reiciendis earum quidem nulla odit autem. Vel, distinctio doloribus.</p>		
	</Row>
	<Row>
		<form onSubmit={this.handleSubmit}>
				<FormGroup controlId="fullname" bsSize="large">
            <ControlLabel className="text">Comments</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              onChange={this.handleChange}
            />
						</FormGroup>
						</form>
	</Row>
</div>

);