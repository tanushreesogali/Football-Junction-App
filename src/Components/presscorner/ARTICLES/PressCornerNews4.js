import React from "react";
import Header from "../../Header";
import Socials from "../../Socials";
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";

// hooks

import useVisibility from "../../../Hooks/useVisibility";

// images
import videoimg from "../../images/video-icon.png";
import newsimg from "../articles-gallery/img4.jpeg";

// components
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../../icons/Play-icon.svg";

import styles from "../PressCorner.module.css"


export default function PressCornerNews4(){
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
                                <div className={styles["press-news-title"]}>Mohun Bagan begins Scouting Programme</div>
                                <div className={styles["press-news-details"]}>Joy Banerjee / 16 June 2022</div>
                                <div className={styles["press-news-subtitle"]}>
                                Mohun Bagan starts their Talent Hunt
                                </div>
                                <div className={styles["press-news-writeup"]}>
                                Mohun Bagan is already building a strong team for next season. However, not only the senior team, but also the junior division, Mohun Bagan is desperate to make it a strong team.<br/>
                                Coach Juan Ferrando will select the players from this trial. And he will be assisted by Assistant Coach Bastab and other support staff. Trials of U-13, U-15 and U-18 teams will be held at the practice ground of Yuva Bharati Stadium.<br/><br/>
                                Trials will be held on June 20-22 under 18, June 24-26 under 15 and on June 26-30 under 13. Each trial will begin at 7:30 A.M.<br/><br/>
                                Players must be born after January 1, 2010 for the U-13 team trials. In case of under 15, it should be born between 1st January 2006 to 31st December 2009. In the end, the players will be able to take part from January 1, 2005 to December 31 for the under-18s. And any footballer can take part in this trial if he falls within the age criteria. Only Xerox copy of age certificate and age test must be passed.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles['video-news-section']}>
                        <div className={styles["video-news-container"]}>
                            <div className={styles["video-news-thumbnail"]}>
                                <img src={videoimg} className={styles["video-news-img"]} alt="video-news-img" />
                                <CircleIcon className={styles["circle"]} />
                                <PlayIcon className={styles["play"]} />
                            </div>

                            <div className={styles["video-news-content"]}>
                                <div className={styles["video-news-background"]}>
                                    <p>CULTURE</p>
                                    <p>.</p>
                                    <p>History</p>
                                </div>
                                <div className={styles["video-news-details"]}>
                                    <p className={styles["video-news-title"]}>
                                        Famous manager in the 90s explains why he fell of grace
                                    </p>
                                    <p className={styles["video-news-subtitle"]}>
                                        Kenny Dalglish explains Andy Stevenson in a 2hr podcasts about his experiences
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
                                <img src={videoimg} className={styles["video-news-img"]} alt="video-news-img" />
                                <CircleIcon className={styles["circle"]} />
                                <PlayIcon className={styles["play"]} />
                            </div>

                            <div className={styles["video-news-content"]}>
                                <div className={styles["video-news-background"]}>
                                    <p>CULTURE</p>
                                    <p>.</p>
                                    <p>History</p>
                                </div>
                                <div className={styles["video-news-details"]}>
                                    <p className={styles["video-news-title"]}>
                                        Famous manager in the 90s explains why he fell of grace
                                    </p>
                                    <p className={styles["video-news-subtitle"]}>
                                        Kenny Dalglish explains Andy Stevenson in a 2hr podcasts about his experiences
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
                                <img src={videoimg} className={styles["video-news-img"]} alt="video-news-img" />
                                <CircleIcon className={styles["circle"]} />
                                <PlayIcon className={styles["play"]} />
                            </div>

                            <div className={styles["video-news-content"]}>
                                <div className={styles["video-news-background"]}>
                                    <p>CULTURE</p>
                                    <p>.</p>
                                    <p>History</p>
                                </div>
                                <div className={styles["video-news-details"]}>
                                    <p className={styles["video-news-title"]}>
                                        Famous manager in the 90s explains why he fell of grace
                                    </p>
                                    <p className={styles["video-news-subtitle"]}>
                                        Kenny Dalglish explains Andy Stevenson in a 2hr podcasts about his experiences
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