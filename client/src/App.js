import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard";

import {
	Row,
	Col,
	Nav,
	// Navbar,
	NavItem,
	NavDropdown,
	MenuItem
} from "react-bootstrap";

import Dashboard from "./Components/Dashboard/Dashboard";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
	render() {
		return (
			<Router>
				<Dashboard />
			</Router>
		);
	}
}

export default App;
