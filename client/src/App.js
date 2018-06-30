import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import {
	Row,
	Col,
	Nav,
	// Navbar,
	NavItem,
	NavDropdown,
	MenuItem
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/login" component={Login} />
				</div>
			</Router>
		);
	}
}

export default App;
