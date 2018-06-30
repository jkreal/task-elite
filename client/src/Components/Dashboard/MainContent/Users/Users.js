import React, {Component} from "react";
import "./Users.css";
import users from "./users.json";
import User from "./User";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

class Users extends Component {
  state = {
    users
  };
  render() {
    return (
      <Row>
          {this.state.users.map(user => (
            <User 
              id={user.id}
              key={user.id}
              name={user.name}
              image={user.image}
              department={user.department}
            />
    
          ))}
      </Row>
    
    
  )
}

  }

// const Users = props => (
// );

export default Users;
