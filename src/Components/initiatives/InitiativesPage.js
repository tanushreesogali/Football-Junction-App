import React from "react";
import LeftArrow from "../LeftArrow";
import Header from "../Header";
import Socials from "../Socials";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

import camp from "../images/camp-img.png";
import training from "../images/training-img.png";
import memorial from "../images/memorial-img.png";

export default function InitiativesPage(){
    const navigate = useNavigate();
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
    return(
        <div>
            <div className="container-align">
                <button className="back-button" type="button" onClick={handleBackClick} id="home-button">
                    <LeftArrow className="back-button-icon"/>
                </button>

                <Header/>
                <Socials/>
                <div className="initiatives-page">
                    <div className="press-corner-content">
                    <p className="press-corner-title">INITIATIVES</p>
                    </div>
                    <div className="initiatives-container-1">
                        <div className="initiatives-overview">Overview</div>
                        <p>Our initiatives empower communities through football, fostering health,
                            education, and skill development. Our programs feature grassroots training, comprehensive skill-
                            building workshops, holistic wellness, and nutrition support. These transformative projects create
                            opportunities and inspire dreams. Explore our diverse initiatives driving positive change and uniting
                            people through a shared passion for football.
                        </p>
                    </div>
                    <div className="initiatives-container-2">
                        <div className="initiative-card">
                            <div className="initiative-card-frame" onClick={handleClick1}>
                                <img src={training} alt="training-img"/>
                                <p className="initiative-title">SCHOOL FOOTBALL TRAINING PROGRAMME</p>
                            </div>
                            <div className="initiative-card-frame" onClick={handleClick2}>
                                <img src={memorial} alt="memorial-img"/>
                                <p className="initiative-title">DEBASIS BHATTACHARYA MEMORIAL</p>
                            </div>
                        </div>

                        <div className="initiative-card">
                            <div className="initiative-card-frame" onClick={handleClick3}>
                                <img src={camp} alt="camp-img"/>
                                <p className="initiative-title">FOOTBALL BOOSTER CAMP</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p>Donations</p>
                        <div className="donations-card">
                            

                        </div>
                    </div>
                </div>
                

            </div>
            <Footer id="footer" className="footer-class"/>
        </div>
    )

}