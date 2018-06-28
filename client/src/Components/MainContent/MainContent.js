
import React from "react";
<<<<<<< HEAD
import Tasks from "../Tasks";
import "./MainContent.css";

const MainContent = (props) => (
    <div>
        <Tasks />
=======
import Users from "./Users";
import Departments from "./Department";
import "./MainContent.css";

const MainContent = (props) => (
    <div className="maincontentContainer">
        <Users />
        {/* <Departments /> */}
>>>>>>> 1db54f70323fe6d474373a1b96f2859fde3095ff
        
      </div>
)

export default MainContent;