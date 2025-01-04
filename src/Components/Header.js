import React from "react";
import image9 from "./images/image 9.png";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <div>
            <div className="header-css">
                <NavLink to="/" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Home
                </NavLink>
                <NavLink to="/tournaments" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Tournaments
                </NavLink>
                <NavLink to="/press-corner" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Press Corner
                </NavLink>
                <img src={image9} className="header-logo" alt="logo" />
                <NavLink to="/initiatives" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Initiatives
                </NavLink>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? "current-page" : ""}>
                    About Us
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Login
                </NavLink>
            </div>
            <div className="header2-css">
                <img src={image9} className="header-logo" alt="logo" />
                <p>Football Junction</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 17H19M5 12H19M5 7H19" stroke="#245069" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}
