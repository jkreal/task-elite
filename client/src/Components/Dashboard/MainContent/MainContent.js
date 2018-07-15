import React from "react";
import Users from "./Users";
import Departments from "./Departments";
import MainTasks from "./MainTasks";
import CompletedTasks from "./CompletedTasks";
import "./MainContent.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class MainContent extends React.Component {

	state = {

	}
	render() {
		const { match } = this.props;
		return (
			<div className="maincontentContainer">
				{/*This is where the react router will decide which component to load*/}
				{/* <Users /> */}
				{/* <Departments /> */}
				<Switch>
					<Route path="/tasks" component={MainTasks} />
					<Route path="/users" component={Users} />
					<Route path="/departments" component={Departments} />
					<Route path="/completedTasks" component={CompletedTasks} />
				</Switch>
			</div>
		)
	}
}


export default MainContent;