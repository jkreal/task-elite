import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sidebarStyle">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav mr-auto flex-sm-column">
        <div class="logoDiv">
            <span>
                <img class="logoImage" src="./images/taskEliteLogo.png"></img>
            </span>

        </div>
        
            <br/>
        

        <li class="nav-item active">
            <a class="nav-link" href="#">Users <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Department</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">All Tasks</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Active Tasks</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Completed Tasks</a>
        </li>
        
        </ul>
        <form class="form-inline my-2 my-lg-0">
        </form>
    </div>
    </nav>

)

export default Sidebar;