// components
import Header from "../Header";
import Socials from "../Socials";
import ViewAll from "../ViewAll";
import RightArrow from "../RightArrow";

import '../../App.css'

// images
import initiative from "../images/close-up-athlete-playing-soccer 2.png"
import ballgame from "../images/Corporate Ball Game Image.png";
import news1 from "../presscorner/articles-gallery/img1.jpeg"
import news2 from "../presscorner/articles-gallery/img2.jpeg"
import news3 from "../presscorner/articles-gallery/img3.jpeg"
import news4 from "../presscorner/articles-gallery/img4.jpeg"
import news5 from "../presscorner/articles-gallery/img5.jpeg"
import news6 from "../presscorner/articles-gallery/img6.jpeg"

// cards
import MatchCenter from "./cards/MatchCenter";

// navigation
import useNavigateWithScroll from "../../Hooks/useNavigateWithScroll";
import React from "react";

// import styles from "./Home.module.css";

export default function MainBody(){
    const navigate = useNavigateWithScroll();

    const handlePressCornerClick = () => {
        navigate("/press-corner");
    };
    const handleInitiativesClick = () => {
        console.log("to initiatives")
        navigate("/initiatives");
    };
    
    // const handleMatchCenterClick = () => {
    //     console.log("to match")
    //     navigate("/match-center");
    // };
    return(
        <div className="container-align">
            <Header/>
            <Socials/>
            <div className="main-css">
                {/* HERO AND CORPORATE GAME DIV */}
                <div className="hero-section">
                    <div className="hero-section-1">
                        {/* image */}
                        <div className="hero-section-content">
                            <p className="p1">Football Junction Foundation</p>
                            <p className="p2">Fostering football across all ages</p>
                        </div>
                    </div>
                    
                  
                    <div className="corporate-game-section" onClick={() => navigate('/tournaments')}>
                            <div>
                                {/* <button className="corporate-nav-button-left">
                                    <LeftArrow className="corporate-game-nav"/>
                                </button> */}
                            </div>
                            <div className="corporate-game-container">
                                    <img className="corporate-ball-game-img" src={ballgame} alt="ballgame background" />
                                    <div className="corporate-ball-game-content">
                                        <span className="corporate-ball-game-title">Corporate Ball Game</span>
                                        <span className="corporate-ball-game-subtitle">Season 2</span>
                                    </div> 
                            </div>
                            <div>
                                {/* <button className="corporate-nav-button-right">
                                    <RightArrow className="corporate-game-nav"/>
                                </button> */}
                            </div>
                    </div>
                </div>

                {/* INITIATIVES DIV */}
                <div className="initiatives-section">
                    <img src={initiative} alt="image1"/>
                    <div className="initiavtive-content">
                        <div className="d1"><p className="p1">INITIATIVES</p></div>
                        <p className="p2">FOOTBALL TRAINING CAMP IN COLLEGES/ UNIVERSITIES</p>
                        <p className="p3">Our goal is to provide a comprehensive football development program led by licensed coaches, aimed at refining skills and fostering a competitive spirit on the field. Our commitment extends beyond training sessions to biweekly fitness programs, ensuring holistic player development. </p>
                        <div onClick={handleInitiativesClick}>
                        <ViewAll/>
                        </div>
                    </div>

                </div>

                {/* MATCH CENTER */}
                <div className="match-section">
                    {/* <div className="match-center-container">
                        <div>
                        <LeftArrow className="match-center-nav"/>
                        </div>
                        <div className="match-center-content">
                            <div className="match-center-header">
                                <p className="match-center-title">MATCH CENTER</p>
                            </div>
                            <div className="match-center-details">
                                <MatchCenterCard/>
                                <div className="match-center-icons-container">
                                        <img src={teamicon1} alt="team1"/>
                                        <img src={teamicon2} alt="team2"/>
                                        <img src={teamicon3} alt="team3"/>
                                        <img src={teamicon4} alt="team4"/>
                                </div>
                                <div className="match-center-view-all" onClick={handleMatchCenterClick}>
                                    <ViewAll/>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                        <RightArrow className="match-center-nav"/>
                        </div>
                    </div> */}
                    <MatchCenter/>

                </div>

                {/* PRESS CORNER SECTION */}
                <div className="press-corner-section" >
                    <div className="press-corner-content" onClick={handlePressCornerClick}>
                        <p className="press-corner-title">PRESS CORNER</p>
                        <ViewAll/>
                    </div>
                    <div className="news-section">
                        <div className="news-section-container">
                            <div className="news-item-container">
                                <img src={news1} className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">Hemanta Dora Joins BSS as Head Coach</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button" onClick={() => {navigate('/press-news1')}}>
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="news-item-container">
                                <img src={news2}className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button" onClick={() => {navigate('/press-news2')}}>
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news-section">
                    <div className="news-section-container">
                            <div className="news-item-container">
                                <img src={news3} className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">MOHUN BAGAN AWARNESS DAY MEETING ANNOUNCES BIG CHANGES</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button" onClick={() => {navigate('/press-news3')}}>
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>   
                                    </div>
                                </div>
                            </div>

                            <div className="news-item-container">
                                <img src={news4} className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">Mohun Bagan begins Scouting Programmea</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button" onClick={() => {navigate('/press-news4')}}>
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="news-section">
                    <div className="news-section-container">
                            <div className="news-item-container">
                                <img src={news5} className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">Supreme Court Appoints Committee of Administrators To Manage Affairs of AIFF</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button" onClick={() => {navigate('/press-news5')}}>
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <div className="news-item-container">
                                <img src={news6} className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">Today a meeting was held with the teams of Premier Division A group at the IFA office</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button" onClick={() => {navigate('/press-news6')}}>
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}