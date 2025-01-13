import React from "react";
import Header from "../../Header";
import Socials from "../../Socials";
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";

// hooks

import useVisibility from "../../../Hooks/useVisibility";

// images
import videoimg from "../../images/video-icon.png";
import newsimg from "../articles-gallery/img5.jpeg";

// components
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../../icons/Play-icon.svg";

import styles from "../PressCorner.module.css"


export default function PressCornerNews5(){
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
                                <div className={styles["press-news-title"]}>Supreme Court Appoints Committee of Administrators To Manage Affairs of AIFF</div>
                                <div className={styles["press-news-details"]}>Joy Banerjee / 16 June 2022</div>
                                <div className={styles["press-news-subtitle"]}>The Supreme Court appointed a three-member Committee of Administrators (CoA)
                                </div>
                                <div className={styles["press-news-writeup"]}>
                                he Supreme Court appointed a three-member Committee of Administrators (CoA) headed by former top court judge AR Dave to manage the affairs of the All India Football Federation.Press Trust of IndiaUpdated: May 18, 2022 01:22 PM ISTRead Time:3 min
                                <br/><br/>
                                Supreme Court Appoints Committee of Administrators To Manage Affairs Of AIFF<br/><br/>

                                The Supreme Court said the current state of affairs is not in the interest of proper governance of AIFF.© PTI<br/><br/>

                                The Supreme Court on Wednesday appointed a three-member Committee of Administrators (CoA) headed by former top court judge AR Dave to manage the affairs of the All India Football Federation (AIFF) and adoption of its constitution in line with the National Sports Code and model guidelines. A bench of Justices DY Chandrachud, Surya Kant and PS Narasimha said the COA will comprise two earlier members — Dr SY Qureshi, former Chief Election Commissioner and Bhaskar Ganguly, former captain of the Indian Football Team besides Justice (retd) Dave.<br/><br/>

                                The top court said the current state of affairs is not in the interest of proper governance of the federation. It directed the CoA to forthwith take charge of the AIFF and assist the court by providing inputs to the court in facilitating the adoption of the constitution by the AIFF in accordance with the National Sports Code and model guidelines.<br/><br/>

                                The bench said the COA will prepare electoral rolls for the purpose of conducting elections to the executive committee of AIFF as per the constitution to be submitted by the two-member committee (ombudsman) of Qureshi and Ganguly.<br/><br/>

                                “The committee of administrators shall carry out day-to-day governance of the All India Football Federation”, the bench said, adding the COA will be at liberty to take the assistance of the erstwhile committee of the federation in holding of tournaments and selection of players and other affairs.<br/><br/>
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