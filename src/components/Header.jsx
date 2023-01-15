import React from 'react';
import {NavLink} from "react-router-dom";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import SignUpBtn from "./SignUpBtn.jsx";
import SignInBtn from "./SignInBtn.jsx";
import userFacade from "../utils/userFacade.js";

function Header(props) {
    return (
        <nav className="topnav">
            <NavLink className="nav-home" to="/"><i></i> HOME</NavLink>

            {userFacade.hasUserAccess("admin", props.loggedIn) &&
                <NavLink className="nav-adminpanel" to="/adminpanel">Admin Panel</NavLink>}

            {props.loggedIn ? (<NavLink className="nav-ownersoverview" to="/ownersoverview">Owners Overview</NavLink>) : (<></>)}

            {props.loggedIn ? (<NavLink className="nav-harbours" to="/harbours">Harbours</NavLink>) : (<></>)}

            {!props.loggedIn ? (<SignUpBtn/>) : (<></>)}

            {!props.loggedIn ? (<SignInBtn/>) : (<LoggedIn setLoggedIn={props.setLoggedIn}/>)}

        </nav>
    );
}

export default Header;