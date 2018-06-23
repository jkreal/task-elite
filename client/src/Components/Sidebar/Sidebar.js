import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sidebarStyle">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav mr-auto flex-sm-column">
        <div className="logoDiv">
            <span>
                <img className="logoImage" src="./images/taskEliteLogo.png"></img>
            </span>

        </div>
        
            <br/>
        

        <li className="nav-item active">
            <a className="nav-link" href="#">Users <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Department</a>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
            <a className="nav-link" href="#">Tasks</a>
        </li>
        <li className="nav-item">
=======
            <a className="nav-link" href="#">All Tasks</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Active Tasks</a>
        </li>
        <li className="nav-item">
>>>>>>> bb47ac8172def17c0662228b0076c4e9d7706aa2
            <a className="nav-link" href="#">Completed Tasks</a>
        </li>
        
        </ul>
        <form className="form-inline my-2 my-lg-0">
        </form>
    </div>
    </nav>

)

export default Sidebar;