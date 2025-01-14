import React from 'react';

import Header from '../Header';
import Socials from '../Socials';
import Footer from '../Footer';



// hooks
import useVisibility from '../../Hooks/useVisibility';
import useNavigateWithScroll from '../../Hooks/useNavigateWithScroll';

import styles from "./AboutUs.module.css";
// components
import LeftArrow from '../LeftArrow';

import mainimg from "../images/night_ground.png";
// import visonimg from "../images/vision-img.png";
import visonimg from "../images/vision-img2.jpeg";
import missionimg from "../images/mis.jpeg";
import phone from "../images/contact-img.jpeg";

// content
import maincontent from "./content/MainContent";
import missioncontent from "./content/MissionContent";
import visioncontent from "./content/VisionContent";

// SVGS
import {ReactComponent as Phone} from "../icons/phone-svg.svg";
import {ReactComponent as Gmail} from "../icons/gmail-svg.svg";
import {ReactComponent as Map} from "../icons/map-svg.svg";





export default function AboutUs() {

    const navigate = useNavigateWithScroll();
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
                    <div className={styles["vision-content"]}>
                        <p className={styles["subheading"]}>Our Vision</p>
                        <div className={styles["main-content"]}>{visioncontent}</div>

                    </div>
                </div>

                <div className={styles["aboutus-container-2"]}>
                    
                    <div className={styles["vision-content"]}>
                        <p className={styles["subheading"]}>Our Mission</p>
                        <div className={styles["main-content"]}>{missioncontent}</div>

                    </div>
                    <img src={missionimg} alt='mision' className={styles['about-mission-img']}/>
                </div>

                <div className={styles["aboutus-container-3"]}>

                    <div className={styles["company-ids-container"]}>
                        <img src={phone} alt='contact-us' className={styles['about-contact-img']}/>
                        <div className={styles["company-ids-section"]}>
                            <div className={styles["company-ids"]}>
                                <Gmail/>
                                <p>footballjunctionfoundation@gmail.com</p>
                            </div>
                            <div className={styles["company-ids"]}>
                                <Phone/>
                                <p>(+91) 9330300937</p>
                            </div>
                            <div className={styles["company-ids"]}>
                                <Map/>
                                <p>224, Ashoke Road, Kolkata - 700084</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["message-here"]}>
                        <p className={styles['form-title']}>Contact Here</p>
                        <form className={styles['contact-form']}>
                            <div className={styles['form-row']}>
                            <input type="text" placeholder="Your Name" className={styles['form-input']} />
                            <input type="email" placeholder="Email Address" className={styles['form-input']} />
                            <input type="url" placeholder="Website URL" className={styles['form-input']} />
                            </div>
                            <textarea placeholder="Comments" className={styles['form-textarea']}></textarea>
                            <button type="submit" className={styles['form-button']}>Send Message</button>
                        </form>
                    </div>

                </div>    

            </div>
        </div>
        <Footer id="footer" className="footer-class"/>
    </div>
  );
}


