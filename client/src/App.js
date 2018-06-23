import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  Row, 
  Col,
  Nav,
  // Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";

class App extends Component {
  render() {
    return (
      <div>
      <Wrapper>

        <Sidebar />
        <Navbar />

      </Wrapper>
      </div>
    );
  }
}

export default App;