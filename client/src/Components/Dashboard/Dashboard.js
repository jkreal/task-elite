import React from "react";
import Login from "../Login";
import Signup from "../Signup";
import Tasks from "../Tasks";
import Sidebar from "../Sidebar/Sidebar";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

const Dashboard = (props) => (
      <div>
        <Row>{/* <Navbar /> */}</Row>
        <Row>
          <Col xs={12} md={6}>
            <Sidebar />
          </Col>
					<Col xs={12} md={6}>
            <Dashboard  />
          </Col>
        </Row>
      </div>
    );

export default Dashboard;