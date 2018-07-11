import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";


import "./Dashboard.css";
import {
  Row,
  Col,
} from "react-bootstrap";

const Dashboard = (props) => (
  <div className="dashboard">
    <Row>{<Navbar />}</Row>
    <Row>
      <Col xs={12} md={6}>
        <Sidebar match={props.match.url} />
      </Col>
      <Col>
        <MainContent />
      </Col>
    </Row>
  </div>
);

export default Dashboard;