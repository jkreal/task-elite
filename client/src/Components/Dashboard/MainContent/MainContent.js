import React from "react";
import Users from "./Users";
import Departments from "./Departments";
import MainTasks from "./MainTasks";
import "./MainContent.css";

const MainContent = (props) => (
    <div className="maincontentContainer">
        {/* <Users /> */}
        <Departments />
        {/* <MainTasks /> */}
      </div>
)

export default MainContent;