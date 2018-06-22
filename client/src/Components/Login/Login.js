import React from "react";
import "./Login.css";
import { Button, Row, Col } from "react-bootstrap";

class Login extends React.Component {
  state = {};

  render() {
		return (
    <React.Fragment>
      <Row>
        <Col>
          <div>
            <form id="signin" name="signin" method="post" action="signin">
              <label for="email">Email Address</label>
              <input class="text" name="email" type="text" />
              <label for="password">Password</label>
              <input name="password" type="password" />
              <input class="btn" type="submit" value="Sign In" />
            </form>
          </div>
        </Col>
      </Row>
		</React.Fragment>
		);
  }
}

export default Login;
