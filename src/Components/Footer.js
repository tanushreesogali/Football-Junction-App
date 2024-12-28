import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import newslettering from "./images/soccer-players-action-professional-stadium 1.png";
import image9 from "./images/Footer About Image.png";



export default function Footer(){
    return(
        <div className="footer-css">
            <div className="newsletter-section">
                <img src={newslettering} alt="newsletter"/>
                <div className="newsletter-content">
                    <p>Don’t miss out, Subscribe to our Newsletter</p>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-links-container">
                <div className="footer-brands">
                    {/* <div>Links column</div> */}
                    <div className="icon-container">
                        <div className="icon-wrapper facebook">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </div>
                        <div className="icon-wrapper twitter">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </div>
                        <div className="icon-wrapper youtube">
                            <FontAwesomeIcon icon={faYoutube} className="icon" />
                        </div>
                        <div className="icon-wrapper instagram">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </div>
                        <div className="icon-wrapper linkedin">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </div>
                    </div>
                    <p>224, Ashoke Road, Kolkata - 700084 (+91) 9330300937</p>
                </div>
                <div className="footer-about">
                    <img src={image9} alt="footer-about"/>
                    <p>Transforming Lives Through Football! Football Junction Foundation, a registered Section 8 non-profit, is on a mission to revolutionize football in our nation.</p>
                </div>
                <div className="footer-legal">
                    {/* Links */}
                    <p>About Us</p>   
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    {/* Links */}
                    <p>Powered by InfluCon Digitals</p>
                </div>
            </div>
        </div>
    )
}