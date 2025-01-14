import React from "react";
import Header from "../../Header";
import Socials from "../../Socials";
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";

// hooks

import useVisibility from "../../../Hooks/useVisibility";

// images
// import videoimg from "../../images/video-icon.png";
import newsimg from "../articles-gallery/img7.jpeg";

// components
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../../icons/Play-icon.svg";

import styles from "../PressCorner.module.css"


export default function PressCornerNews7(){
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
                                <div className={styles["press-news-title"]}>Registration of New Clubs at IFA</div>
                                <div className={styles["press-news-details"]}>Joy Banerjee / 16 June 2022</div>
                                {/* <div className={styles["press-news-subtitle"]}>
                                </div> */}
                                <div className={styles["press-news-writeup"]}>
                                A set of issues were discussed at the IFA Governing Body meeting. Anirban Dutt has been elected as the new treasurer of IFA. The post of Treasurer became vacant on the death of the outgoing Treasurer Krishnendu Banerjee. Anirban Dutt was unanimously elected in the last meeting as the current governor of IFA on Tuesday. A total of 14 clubs from different divisions were also given new approval in today’s meeting.<br/>
                                In the first division, Diamond Harbour Football Club, All India Airlines Recreation Club, Belgharia Athletic Club and Bengal Football Academy were approved. Multiple clubs have also submitted their request, but a final decision will be made after inspecting their infrastructure.
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className={styles['video-news-section']}>
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
                    </div> */}
                    <div className={styles['video-news-section']}>
                        <div className={styles["video-news-container"]}>
                                <div className={styles["video-news-thumbnail"]}>
                                    <a href="https://www.youtube.com/watch?v=IBTi4HCpUjg" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/IBTi4HCpUjg/maxresdefault.jpg" 
                                            className={styles["video-news-img"]} 
                                            alt="video-news-thumbnail" 
                                        />
                                        <CircleIcon className={styles["circle"]} />
                                        <PlayIcon className={styles["play"]} />
                                    </a>
                                </div>

                                <div className={styles["video-news-content"]}>
                                    <div className={styles["video-news-background"]}>
                                        <p>CULTURE</p>
                                        <p>.</p>
                                        <p>History</p>
                                    </div>
                                    <div className={styles["video-news-details"]}>
                                        <p className={styles["video-news-title"]}>
                                        THE CORPORATE BALL GAME 2024 II INFIFLEX & ZOMATO || NKDA GROUND 2
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
                                    <a href="https://www.youtube.com/watch?v=vpRJzEn8INg" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/vpRJzEn8INg/maxresdefault.jpg" 
                                            className={styles["video-news-img"]} 
                                            alt="video-news-thumbnail" 
                                        />
                                        <CircleIcon className={styles["circle"]} />
                                        <PlayIcon className={styles["play"]} />
                                    </a>
                                </div>

                                <div className={styles["video-news-content"]}>
                                    <div className={styles["video-news-background"]}>
                                        <p>CULTURE</p>
                                        <p>.</p>
                                        <p>History</p>
                                    </div>
                                    <div className={styles["video-news-details"]}>
                                        <p className={styles["video-news-title"]}>
                                        আইএসএলের রেফারিং নিয়ে বিস্ফোরক প্রাক্তন ফুটবলার মানস ভট্টাচার্য। দেখুন ভিডিওটি।
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
                                    <a href="https://www.youtube.com/watch?v=8KkJJOB9ZWY" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/8KkJJOB9ZWY/maxresdefault.jpg" 
                                            className={styles["video-news-img"]} 
                                            alt="video-news-thumbnail" 
                                        />
                                        <CircleIcon className={styles["circle"]} />
                                        <PlayIcon className={styles["play"]} />
                                    </a>
                                </div>

                                <div className={styles["video-news-content"]}>
                                    <div className={styles["video-news-background"]}>
                                        <p>CULTURE</p>
                                        <p>.</p>
                                        <p>History</p>
                                    </div>
                                    <div className={styles["video-news-details"]}>
                                        <p className={styles["video-news-title"]}>
                                        THE CORPORATE BALL GAME 2024 II BRAITHWAITE VS ITC || NKDA GROUND 1
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
                    </div>
                </div>
            </div>

            <Footer id="footer" className="footer-class"/>
        </div>

    );
}