import React from "react";
import image9 from "./images/image 9.png";

export default function Header(){
    return(
        <div>
        <div className="header-css">
            <p className="current-page">Home</p>
            <p>Tournaments</p>
            <p>Press Corner</p>
            <img src={image9} className="header-logo" alt="logo"/>
            <p>Initiatives</p>
            <p>About Us</p>
            <p>Login</p> 
        </div>
        <div className="header2-css">
            <img src={image9} className="header-logo" alt="logo"/>
            <p>Football Junction</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 17H19M5 12H19M5 7H19" stroke="#245069" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        </div>
        </div>
        
        
    )
}
