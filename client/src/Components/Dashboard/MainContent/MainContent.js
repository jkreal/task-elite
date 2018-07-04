import React from "react";
import Users from "./Users";

import Departments from "./Departments";
import MainTasks from "./MainTasks";
import "./MainContent.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MainContent = (props) => (

<React.Fragment>
    <div className="maincontentContainer">
        {/* <Users /> */}
        {/* <Departments /> */}
		<Departments />
			{/* <Route path="/tasks" component={MainTasks}/>
			<Route path="/users" component={Users}/> */}

		</div>
	</React.Fragment>

)

export default MainContent;