import React from "react";
import image9 from "./images/image 9.png";

export default function Header(){
    return(
        <div className="header-css">
            <p className="current-page">Home</p>
            <p>Tournaments</p>
            <p>Press Corner</p>
            <img src={image9} className="header-logo" alt="logo"/>
            <p>Initiatives</p>
            <p>About Us</p>
            <p>Login</p> 
        </div>
        
    )
}