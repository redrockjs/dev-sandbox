import React from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return <div>
        <ul>
            <li>
                <NavLink to="/useeffecthooks">UseEffect</NavLink>
            </li>
        </ul>
    </div>
}