import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import {
  Row,
  Col,
  Nav,
  // Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
			<Dashboard />
    );
  }
}

export default App;
