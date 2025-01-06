import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Header';
import Socials from '../Socials';
import Footer from '../Footer';



// hooks
import useVisibility from '../../Hooks/useVisibility';

import styles from "./AboutUs.module.css";
// components
import LeftArrow from '../LeftArrow';

import mainimg from "../images/night_ground.png";
import visonimg from "../images/vision-img.png";
// import missionimg from "../images/mission-img.png";

// content
import maincontent from "./content/MainContent";
// import missioncontent from "./content/MissionContent";
import visioncontent from "./content/VisionContent";





export default function PressCorner() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        console.log("Button clicked");
        navigate("/");
    };
    
    useVisibility();
  return (
    <div>
    <div className="container-align">
        <button className="back-button" type="button" onClick={handleBackClick} id="home-button">
            <LeftArrow className="back-button-icon"/>
        </button>

        <Header/>
        <Socials/>
        <div className={styles["aboutus-page"]}>
            <div className={styles["aboutus-container-1"]}>
                <div className={styles["aboutus-content"]}>
                    <p className={styles["aboutus-title"]}>About Us</p>
                </div>
                <img src={mainimg} alt="main-img"/>
                <div className={styles["about-content"]}>
                    <p className={styles["subheading"]}>What is Football Junction</p>
                    <div className={styles["main-content"]}>{maincontent}</div>
                </div>
            </div>
            <div className={styles["aboutus-container-2"]}>
                <img src={visonimg} alt='vision' className={styles['about-vision-img']}/>
                <div className={styles["about-content"]}>
                    <p className={styles["subheading"]}>Our Vision</p>
                    <div className={styles["main-content"]}>{visioncontent}</div>

                </div>
            </div>




        </div>
    </div>
    <Footer id="footer" className="footer-class"/>
    </div>
  );
}


