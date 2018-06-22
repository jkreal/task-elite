import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  Row, 
  Col,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import Sidebar from "./Components/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <Sidebar />

    );
  }
}

export default App;