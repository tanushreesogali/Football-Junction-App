import React from "react";

import LeftArrow from "../LeftArrow";


export default function Footer(){
    return(
        <div>
            <button className="back-button" type="button" id="home-button">
                <LeftArrow className="back-button-icon"/>
            </button>
            
           
        </div>
    )
}