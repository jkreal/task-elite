import React from "react";
import "./Signup.css";
import { Button, Row, Col } from "react-bootstrap";

class Signup extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <div>
              <form id="signup" name="signup" method="post" action="/signup">
                <label for="email">Email Address</label>
                <input class="text" name="email" type="email" />
                <label for="firstname">Full Name</label>
                <input name="firstname" type="text" />
                <label for="password">Password</label>
                <input name="password" type="password" />
                <input class="btn" type="submit" value="Sign Up" />
              </form>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Signup;
