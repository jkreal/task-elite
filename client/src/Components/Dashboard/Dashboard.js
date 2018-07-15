import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
// import MainContent from "./MainContent";
import { Row, Col } from "react-bootstrap";

import MainTasks from "./MainContent/MainTasks";
import Users from "./MainContent/Users";
import Departments from "./MainContent/Departments";
import CompletedTasks from "./MainContent/CompletedTasks";

import {Route} from "react-router-dom";

class Dashboard extends React.Component {


  render() {
    const {match} = this.props;
    return (

      <div>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col xs={4} md={2} lg={2}>
          <Sidebar />
        </Col>
        <Col xs={8} md={10} lg={10}>
          <Route path="/dashboard/tasks" component={MainTasks} />
          <Route path="/dashboard/users" component={Users} />
          <Route path="/dashboard/departments" component={Departments} />
          <Route path="/dashboard/completedTasks" component={CompletedTasks} />
        </Col>
      </Row>
    </div>
    )
  }
}
export default Dashboard;
