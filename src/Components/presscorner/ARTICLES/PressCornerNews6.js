import React from "react";
import Header from "../../Header";
import Socials from "../../Socials";
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";

// hooks

import useVisibility from "../../../Hooks/useVisibility";

// images
// import videoimg from "../../images/video-icon.png";
import newsimg from "../articles-gallery/img6.jpeg";

// components
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../../icons/Play-icon.svg";

import styles from "../PressCorner.module.css"


export default function PressCornerNews6(){
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
                                <div className={styles["press-news-title"]}>Today a meeting was held with the teams of Premier Division A group at the IFA office</div>
                                <div className={styles["press-news-details"]}>Joy Banerjee / 16 June 2022</div>
                                {/* <div className={styles["press-news-subtitle"]}>
                                </div> */}
                                <div className={styles["press-news-writeup"]}>
                                On this day (09/08/2022) a meeting was held with the teams of Premier Division A group at the IFA office. It was attended by representatives of all parties except Mohun Bagan FC. The teams have been asked to start the league quickly and the IFA has told them that the league will start this month and will end quickly.
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
                                    <a href="https://www.youtube.com/watch?v=O5Yk8yt96mM" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/O5Yk8yt96mM/maxresdefault.jpg" 
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
                                        বিতর্কিত রেফারি থেকে ডায়মন্ড হারবার এফসির আই লিগ দুয়ের প্রস্তুতি নিয়ে খেলা মেলা কিবু ভিকুনা।
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
                                    <a href="https://www.youtube.com/watch?v=zAvr4XF9xEg" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/zAvr4XF9xEg/maxresdefault.jpg" 
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
                                        সন্তোষ ট্রফি জয়ের মূল কারিগর কারা! কি বলছেন বাংলা দলের কোচ সঞ্জয় সেন। দেখুন ভিডিওটি।
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
                                    <a href="https://www.youtube.com/watch?v=96gEjRDv0Xs" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src="https://img.youtube.com/vi/96gEjRDv0Xs/maxresdefault.jpg" 
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
                                        পাঞ্জাবের বিরুদ্ধে জয়ই সমর্থকদের বড়দিনের উপহার হিসেবে দিতে চান আলবার্তো রদ্রিগেজ। দেখুন ভিডিওটি।
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