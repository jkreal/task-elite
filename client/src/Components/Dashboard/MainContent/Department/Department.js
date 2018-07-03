import React from "react";
import "./Department.css";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

const Departments = props => (
  <Row>
    <div className="department-container">
      <div>
        <h1 className="departmentTitle">Departments</h1>
        
      </div>
      <hr />
      <div>
        <h2> {props.department}</h2>

      </div>
    </div>
  </Row>
);

export default Departments;
