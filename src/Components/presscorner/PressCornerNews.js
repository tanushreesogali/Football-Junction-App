import React from "react";
import Header from "../Header";
import Socials from "../Socials";
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";

// hooks
import useVisibility from '../../Hooks/useVisibility';

// images
import videoimg from "../images/video-icon.png";
import newsimg from "../images/news-header-img.png";
// components
import RightArrow from "../RightArrow";
import LeftArrow from "../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../icons/comment-icon.svg';

// import styles from "./PressCorner.module.css"


export default function PressCornerNews(){
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("Button clicked");
        navigate("/press-corner");
    };
    useVisibility();
    return(
        <div>
            <div className="container-align">
                <button className="back-button" type="button" onClick={handleClick} id="home-button">
                    <LeftArrow className="back-button-icon"/>
                </button>
                <Header/>
                <Socials/>
                <div className="press-news-page">
                    <div className="press-news-container">
                        <div className="press-corner-content">
                            <p className="press-corner-title">PRESS CORNER</p>
                        </div>
                        <div className="press-news-main">
                            <img src={newsimg} alt="news-img"/>
                            <div className="press-news-content">
                                <div className="press-news-background">
                                    <p>Analysis</p>
                                    <p>.</p>
                                    <p>WC Qualifiers</p>
                                </div>
                                <div className="press-news-title">Hemanta Dora Joins BSS as Head Coach</div>
                                <div className="press-news-details">Joy Banerjee / 16 June 2022</div>
                                <div className="press-news-subtitle">A New Coach change at Behala Sanskritik Sammilani (BSS)</div>
                                <div className="press-news-writeup">Behala Sanskritik Sammilani (BSS) wants to start the journey of the upcoming Kolkata Premier Division Football League with former national goalkeeper Hemant Dora as the head coach. This club does not worship on the poila Baishakh. The day this club in Maidan enters the first practice of the season is the day of Bar Pujo. This time Mangalik Puja follows that ritual.<br/>
                                BSS started the new season by worshipping the Goal post (বার পূজো) . BSS will run the preparation of Kolkata Premier Division Football League at Janai of Hughli, not at any ground of Kolkata Maidan. There is an arrangement for the footballers of foreign countries to stay separately. It can be said that Hemant Dora is going to prepare his team in complete silence. As a new coach, he is ready to take up the challenge as always.</div>
                            </div>

                        </div>
                    </div>
                    <div className='video-news-section'>
                        <div className='video-news-container'>
                            <div className='video-news-thumbnail'>
                                <img src={videoimg} className='video-news-img' alt='video-news-img'/>
                            </div>

                            <div className='video-news-content'>
                                <div className='video-news-background'>
                                    <p>CULTURE</p>
                                    <p>.</p>
                                    <p>History</p>
                                </div>
                                <div className='video-news-details'>
                                    <p className='video-news-title'>Famous manager in the 90s explains why he fell of grace</p>
                                    <p className='video-news-subtitle'>Kenny Dalglish explains Andy Stevenson in a 2hr podcasts about his experiences </p>
                                </div>
                                <div className='video-news-footer'>
                                    <div className='video-views'>
                                        <div className='time-section'>
                                            <TimeIcon/>
                                            <p>25-Jul-2024</p>
                                        </div>
                                        <div className='comment-section'>
                                            <CommentIncon/>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div className='news-full-story'>
                                        <p>Full Story</p>
                                        <RightArrow/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='video-news-container'>
                            <div className='video-news-thumbnail'>
                                <img src={videoimg} className='video-news-img' alt='video-news-img'/>
                            </div>

                            <div className='video-news-content'>
                                <div className='video-news-background'>
                                    <p>CULTURE</p>
                                    <p>.</p>
                                    <p>History</p>
                                </div>
                                <div className='video-news-details'>
                                    <p className='video-news-title'>Famous manager in the 90s explains why he fell of grace</p>
                                    <p className='video-news-subtitle'>Kenny Dalglish explains Andy Stevenson in a 2hr podcasts about his experiences </p>
                                </div>
                                <div className='video-news-footer'>
                                    <div className='video-views'>
                                        <div className='time-section'>
                                            <TimeIcon/>
                                            <p>25-Jul-2024</p>
                                        </div>
                                        <div className='comment-section'>
                                            <CommentIncon/>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div className='news-full-story'>
                                        <p>Full Story</p>
                                        <RightArrow/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='video-news-container'>
                            <div className='video-news-thumbnail'>
                                <img src={videoimg} className='video-news-img' alt='video-news-img'/>
                            </div>

                            <div className='video-news-content'>
                                <div className='video-news-background'>
                                    <p>CULTURE</p>
                                    <p>.</p>
                                    <p>History</p>
                                </div>
                                <div className='video-news-details'>
                                    <p className='video-news-title'>Famous manager in the 90s explains why he fell of grace</p>
                                    <p className='video-news-subtitle'>Kenny Dalglish explains Andy Stevenson in a 2hr podcasts about his experiences </p>
                                </div>

                                <div className='video-news-footer'>
                                    <div className='video-views'>
                                        <div className='time-section'>
                                            <TimeIcon/>
                                            <p>25-Jul-2024</p>
                                        </div>
                                        <div className='comment-section'>
                                            <CommentIncon/>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div className='news-full-story'>
                                        <p>Full Story</p>
                                        <RightArrow/>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Footer id="footer" className="footer-class"/>
        </div>

    );
}