import Header from "./Header";
import Socials from "./Socials";
import ViewAll from "./ViewAll";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import initiative from "./images/close-up-athlete-playing-soccer 2.png"
// import stadium from "./images/empty stadium.jpg";
import ballgame from "./images/Corporate Ball Game Image.png";
import team1 from "./images/Match Center Team Image.png";
import team2 from "./images/Match Center Team Image (1).png";
import team3 from "./images/Match Center Team Image (2).png";
import teamicon1 from "./images/Match Center Icon.png";
import teamicon2 from "./images/Match Center Icon (1).png";
import teamicon3 from "./images/Match Center Icon (2).png";
import teamicon4 from "./images/Match Center Icon (3).png";
import React from "react";

export default function MainBody(){
    
    return(
        <div className="container-align">
            <Header/>
            <Socials/>
            <div className="main-css">
                <div className="hero-section">
                    <div className="hero-section-1">
                        {/* image */}
                        <div className="hero-section-content">
                            <p className="p1">Football Junction Foundation</p>
                            <p className="p2">Fostering football across all ages</p>
                        </div>
                    </div>
                    
                  
                    <div className="corporate-game-section">
                        {/* <img className="bg-stadium-img" src={stadium} alt="stadium img"/> */}

                        <div className="coporate-game-logo">
                            <img className="corporate-ball-game-img" src={ballgame} alt="ballgame background" />

                        </div>
                        <div className="corporate-game-container">
                            <div>
                                <button className="corporate-nav-button-left">
                                    <LeftArrow className="corporate-game-nav"/>
                                </button>
                            </div>
                            <div className="corporate-game-text">
                                <div className="corporate-ball-game-content">
                                    <span className="corporate-ball-game-title">Corporate Ball Game</span>
                                </div>
                                <div className="corporate-ball-game-subtitle-container">
                                    <span className="corporate-ball-game-subtitle">Season 2</span>
                                </div>
                            </div>
                            <div>
                                <button className="corporate-nav-button-right">
                                    <RightArrow className="corporate-game-nav"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="initiatives-section">
                    <img src={initiative} alt="image1"/>
                    <div className="initiavtive-content">
                        <div className="d1"><p className="p1">INITIATIVES</p></div>
                        <p className="p2">FOOTBALL TRAINING CAMP IN COLLEGES/UNIVERSITIES</p>
                        <p className="p3">Our goal is to provide a comprehensive football development program led by licensed coaches, aimed at refining skills and fostering a competitive spirit on the field. Our commitment extends beyond training sessions to biweekly fitness programs, ensuring holistic player development. </p>
                        <ViewAll/>
                    </div>

                </div>
                <div className="match-section">
                    <div className="match-center-container">
                        <div>
                        <LeftArrow className="match-center-nav"/>
                        </div>
                        <div className="match-center-content">
                            <div className="match-center-header">
                                <p className="match-center-title">MATCH CENTER</p>
                            </div>
                            <div className="match-center-details">
                                <div className="match-center-status-container">
                                    <div className="match-center-statue">33’</div>
                                    <div className="match-center-score-container">
                                        <div className="match-center-team-container">
                                            <img src={team1} alt="team"/>
                                            <p className="match-center-team-name">Mohun Bagan Super Giant</p>
                                            
                                        </div>
                                        <div className="score">
                                            <p>3</p>
                                            <p>-</p>
                                            <p>2</p>
                                        </div>
                                        <div className="match-center-team-container">
                                            
                                            <p className="match-center-team-name">East Bengal FC</p>
                                            <img src={team2} alt="team"/>
                                        </div>

                                    </div>
                                    <img className="live-match" src={team3} alt="indian super league"/>
                                </div>
                                <div className="match-center-icons-container">
                                        <img src={teamicon1} alt="team1"/>
                                        <img src={teamicon2} alt="team2"/>
                                        <img src={teamicon3} alt="team3"/>
                                        <img src={teamicon4} alt="team4"/>
                                </div>
                                <div className="match-center-view-all">
                                    <ViewAll/>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                        <RightArrow className="match-center-nav"/>
                        </div>
                    </div>

                </div>
                <div className="press-corner-section">
                    <div className="press-corner-content">
                        <p className="press-corner-title">PRESS CORNER</p>
                        <ViewAll/>
                    </div>
                    <div className="news-section">
                        <div className="news-section-container">
                            <div className="news-item-container">
                                <img className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button">
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="news-item-container">
                                <img className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button">
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
                                <img className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button">
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="news-item-container">
                                <img className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button">
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
                                <img className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button">
                                                <span className="news-item-viewall-text">FULL STORY</span>
                                                <RightArrow className="news-item-viewall-icon"/>
                                            </button>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="news-item-container">
                                <img className="news-item-image" alt="news-item-img"/>
                                <div className="news-item-content">
                                    <p className="news-item-title">India begin AFC Asian cup qualifiers journey Against Cambodia</p>
                                    <div className="news-item-text-container">
                                        <div className="news-item-viewall-container">
                                            <button className="news-item-viewall-button">
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
