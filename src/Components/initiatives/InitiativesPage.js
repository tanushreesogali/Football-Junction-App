import React from "react";
import LeftArrow from "../LeftArrow";
import Header from "../Header";
import Socials from "../Socials";
import Footer from "../Footer";
// import { useNavigate } from "react-router-dom";
import useVisibility from '../../Hooks/useVisibility.js';
import useNavigateWithScroll from "../../Hooks/useNavigateWithScroll.js";

import camp from "../images/camp-img.jpeg";

import trainimg from "../images/training-img.jpeg"
import memorial from "../images/memorial-img.jpeg";
import DonationDesktop from "./DonationDesktop.js";
import DonationsMobile from "./DonationsMobile.js";

import styles from "./Initiatives.module.css";

export default function InitiativesPage(){
    const navigate = useNavigateWithScroll();
    const handleBackClick = () => {
        console.log("Button clicked");
        navigate("/");
    };
    const handleClick1 =() =>{
        navigate("/initiative-training")
    }
    const handleClick2 =() =>{
        navigate("/initiative-memorial")
    }
    const handleClick3 =() =>{
        navigate("/initiative-camp")
    }
    useVisibility();
    return(
        <div>
            <div className="container-align">
                <button className="back-button" type="button" onClick={handleBackClick} id="home-button">
                    <LeftArrow className="back-button-icon"/>
                </button>

                <Header/>
                <Socials/>
                <div className={styles["initiatives-page"]}>
                    <div className={styles["press-corner-content"]}>
                        <p className={styles["press-corner-title"]}>INITIATIVES</p>
                    </div>
                    <div className={styles["initiatives-container-1"]}>
                        <div className={styles["initiatives-overview"]}>Overview</div>
                        <p>
                            Our initiatives empower communities through football, fostering health,
                            education, and skill development. Our programs feature grassroots training, comprehensive skill-
                            building workshops, holistic wellness, and nutrition support. These transformative projects create
                            opportunities and inspire dreams. Explore our diverse initiatives driving positive change and uniting
                            people through a shared passion for football.
                        </p>
                    </div>
                    <div className={styles["initiatives-container-2"]}>
                        <div className={styles["initiative-card"]}>
                            <div className={styles["initiative-card-frame"]} onClick={handleClick1}>
                                <img src={trainimg} alt="training-img" />
                                <p className={styles["initiative-title"]}>SCHOOL FOOTBALL TRAINING PROGRAMME</p>
                            </div>
                            <div className={styles["initiative-card-frame"]} onClick={handleClick2}>
                                <img src={memorial} alt="memorial-img" />
                                <p className={styles["initiative-title"]}>DEBASIS BHATTACHARYA MEMORIAL</p>
                            </div>
                        </div>

                        <div className={styles["initiative-card"]}>
                            <div className={styles["initiative-card-frame"]} onClick={handleClick3}>
                                <img src={camp} alt="camp-img" />
                                <p className={styles["initiative-title"]}>FOOTBALL BOOSTER CAMP</p>
                            </div>
                        </div>
                    </div>

                    <DonationsMobile className={styles["donate-mobile"]} />
                    <DonationDesktop className={styles["donate-desktop"]} />
                </div>

            </div>
            <Footer id="footer" className="footer-class"/>
        </div>
    )

}