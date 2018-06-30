import React from "react";
import Users from "./Users";
import Departments from "./Department";
import "./MainContent.css";

const MainContent = (props) => (
    <div className="maincontentContainer">
			{/*This is where the react router will decide which component to load*/}
        <Users />
        {/* <Departments /> */}
        
      </div>
)

export default MainContent;