import React from "react";
import Header from "../../Header";
import Socials from "../../Socials";
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";

// hooks

import useVisibility from "../../../Hooks/useVisibility";

// images
// import videoimg from "../../images/video-icon.png";
import newsimg from "../../images/news-header-img.png";

// components
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../../icons/Play-icon.svg";

import styles from "../PressCorner.module.css"


export default function PressCornerNews1(){
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
                <div className={styles["press-news-page"]}>
                    <div className={styles['press-news-container']}>
                        <div className={styles["press-corner-content"]}>
                            <p className={styles["press-corner-title"]}>PRESS CORNER</p>
                        </div>
                        <div className={styles["press-news-main"]}>
                            <img src={newsimg} alt="news-img" />
                            <div className={styles["press-news-content"]}>
                                <div className={styles["press-news-background"]}>
                                    <p>Analysis</p>
                                    <p>.</p>
                                    <p>WC Qualifiers</p>
                                </div>
                                <div className={styles["press-news-title"]}>Hemanta Dora Joins BSS as Head Coach</div>
                                <div className={styles["press-news-details"]}>Joy Banerjee / 16 June 2022</div>
                                <div className={styles["press-news-subtitle"]}>
                                    A New Coach change at Behala Sanskritik Sammilani (BSS)
                                </div>
                                <div className={styles["press-news-writeup"]}>
                                    Behala Sanskritik Sammilani (BSS) wants to start the journey of the upcoming Kolkata Premier
                                    Division Football League with former national goalkeeper Hemant Dora as the head coach. This
                                    club does not worship on the poila Baishakh. The day this club in Maidan enters the first practice
                                    of the season is the day of Bar Pujo. This time Mangalik Puja follows that ritual.<br />
                                    BSS started the new season by worshipping the Goal post (বার পূজো). BSS will run the preparation
                                    of Kolkata Premier Division Football League at Janai of Hughli, not at any ground of Kolkata
                                    Maidan. There is an arrangement for the footballers of foreign countries to stay separately. It can
                                    be said that Hemant Dora is going to prepare his team in complete silence. As a new coach, he is
                                    ready to take up the challenge as always.
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className={styles['video-news-section']}>
                            <div className={styles["video-news-container"]}>
                                <div className={styles["video-news-thumbnail"]}>
                                    <a href="https://www.youtube.com/watch?v=lQMPL3zrsKU" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/lQMPL3zrsKU/maxresdefault.jpg" 
                                            className={styles["video-news-img"]} 
                                            alt="video-news-thumbnail" 
                                        />
                                        <CircleIcon className={styles["circle"]} />
                                        <PlayIcon className={styles["play"]} />
                                    </a>
                                </div>

                                <div className={styles["video-news-content"]}>
                                    {/* <div className={styles["video-news-background"]}>
                                        <p>CULTURE</p>
                                        <p>.</p>
                                        <p>History</p>
                                    </div> */}
                                    <div className={styles["video-news-details"]}>
                                        <p className={styles["video-news-title"]}>
                                        INFLIFIEX VS SUNKNOWLEDGE - FINAL
                                        </p>
                                        <p className={styles["video-news-subtitle"]}>
                                        The Corporate Ball Game Season 2: GOLD - INFLIFIEX VS SUNKNOWLEDGE
                                        </p>
                                    </div>
                                    <div className={styles["video-news-footer"]}>
                                        <div className={styles["video-views"]}>
                                            <div className={styles["time-section"]}>
                                                <TimeIcon />
                                                <p>25-Jul-2024</p>
                                            </div>
                                            <div className={styles["comment-section"]}>
                                                <CommentIncon />
                                                <p>0</p>
                                            </div>
                                        </div>
                                        <div className={styles["news-full-story"]}>
                                            <p>Full Story</p>
                                            <RightArrow />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["video-news-container"]}>
                                <div className={styles["video-news-thumbnail"]}>
                                    <a href="https://www.youtube.com/watch?v=jVKPTARvUB8" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/jVKPTARvUB8/maxresdefault.jpg" 
                                            className={styles["video-news-img"]} 
                                            alt="video-news-thumbnail" 
                                        />
                                        <CircleIcon className={styles["circle"]} />
                                        <PlayIcon className={styles["play"]} />
                                    </a>
                                </div>

                                <div className={styles["video-news-content"]}>
                                    {/* <div className={styles["video-news-background"]}>
                                        <p>CULTURE</p>
                                        <p>.</p>
                                        <p>History</p>
                                    </div> */}
                                    <div className={styles["video-news-details"]}>
                                        <p className={styles["video-news-title"]}>
                                        যখনই দলের প্রয়োজনে মাঠে নামবো, নিজের একশো শতাংশ দিয়ে দলকে জেতানোই লক্ষ বলছেন কামিন্স।দেখুন ভিডিওটি।
                                        </p>
                                        <p className={styles["video-news-subtitle"]}>
                                        {/* The Corporate Ball Game Season 2: SILVER PLATE - QUARTERFINAL */}
                                        </p>
                                    </div>
                                    <div className={styles["video-news-footer"]}>
                                        <div className={styles["video-views"]}>
                                            <div className={styles["time-section"]}>
                                                <TimeIcon />
                                                <p>25-Jul-2024</p>
                                            </div>
                                            <div className={styles["comment-section"]}>
                                                <CommentIncon />
                                                <p>0</p>
                                            </div>
                                        </div>
                                        <div className={styles["news-full-story"]}>
                                            <p>Full Story</p>
                                            <RightArrow />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["video-news-container"]}>
                                <div className={styles["video-news-thumbnail"]}>
                                    <a href="https://www.youtube.com/watch?v=r5dMw1QoSPs" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/r5dMw1QoSPs/maxresdefault.jpg" 
                                            className={styles["video-news-img"]} 
                                            alt="video-news-thumbnail" 
                                        />
                                        <CircleIcon className={styles["circle"]} />
                                        <PlayIcon className={styles["play"]} />
                                    </a>
                                </div>

                                <div className={styles["video-news-content"]}>
                                    {/* <div className={styles["video-news-background"]}>
                                        <p>CULTURE</p>
                                        <p>.</p>
                                        <p>History</p>
                                    </div> */}
                                    <div className={styles["video-news-details"]}>
                                        <p className={styles["video-news-title"]}>
                                            STAR TV VS ZOMATO
                                        </p>
                                        <p className={styles["video-news-subtitle"]}>
                                        The Corporate Ball Game Season 2: SILVER PLATE - QUARTERFINAL
                                        </p>
                                    </div>
                                    <div className={styles["video-news-footer"]}>
                                        <div className={styles["video-views"]}>
                                            <div className={styles["time-section"]}>
                                                <TimeIcon />
                                                <p>25-Jul-2024</p>
                                            </div>
                                            <div className={styles["comment-section"]}>
                                                <CommentIncon />
                                                <p>0</p>
                                            </div>
                                        </div>
                                        <div className={styles["news-full-story"]}>
                                            <p>Full Story</p>
                                            <RightArrow />
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