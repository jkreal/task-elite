import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import {
  Row,
  Col,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
			<Dashboard />
    );
  }
}

export default App;
