import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import {
  Row, 
  Col,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Login />
      
    );
  }
}

export default App;
