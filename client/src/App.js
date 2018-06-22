import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import Login from "./Components/Login"
import Signup from "./Components/Signup"
=======
import {
  Row, 
  Col,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
>>>>>>> a28b8087503094ccf4db51988c691966622dfe1a

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Signup />
=======
      
      
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
          <NavItem eventKey="1" href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey="2" title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey="3" disabled>
            NavItem 3 content
          </NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        </div>
        // <Row className="show-grid">
        //     <Col>
            
        //     </Col>
        // </Row>
        
      
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Task Elite</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
>>>>>>> a28b8087503094ccf4db51988c691966622dfe1a
    );
  }
}

export default App;
