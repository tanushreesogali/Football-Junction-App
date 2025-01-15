import React from "react";
import Header from "../../Header";
import Socials from "../../Socials";
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";

// hooks

import useVisibility from "../../../Hooks/useVisibility";

// images
// import videoimg from "../../images/video-icon.png";
import newsimg from "../articles-gallery/img3.jpeg";

// components
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
// SVGS
import { ReactComponent as TimeIcon } from '../../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../../icons/Play-icon.svg";

import styles from "../PressCorner.module.css"


export default function PressCornerNews3(){
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
                                <div className={styles["press-news-title"]}>MOHUN BAGAN AWARNESS DAY MEETING ANNOUNCES BIG CHANGES</div>
                                <div className={styles["press-news-details"]}>Joy Banerjee / 16 June 2022</div>
                                <div className={styles["press-news-subtitle"]}>
                                The following awards have been named after famous personalities to be awarded to sportspersons every year henceforth: 
                                </div>
                                <div className={styles["press-news-writeup"]}>
                                Best Athlete (Pranab Banerjee Award) – Bapi Sekh <br/>
                                Best Forward in Football (Subhas Bhowmick Award) — Kiyan Nassiri Giri <br/>
                                Best Sports Journalist (Moti Nandi Award) — Ashok Dasgupta <br/>
                                Best Sports Official (Anjan Mitra Award) — V.C. Praveen (President, Gokulam Kerala FC) <br/>
                                Best Cricket Player (Arun Lal Award) — Prinann Dutta <br/>
                                Best Football Player (Shibdas Bhaduri Award) — Liston Colaco <br/>
                                Lifetime Achievement Award — Balai Dey <br/>
                                Mohun Bagan Ratna — Shyam Thapa <br/><br/>
                                Mohunbagan Athletic Club has formed a committee to deal with the case of beloved fan cum member Mr. Anirban Nandy. We are consulting with Dr. Pratim Sengupta, Renowned Nephrologist for a proper guideline for his treatment<br/><br/>
                                Press Meet At Club Tent
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
                                            {/* <div className={styles["video-news-background"]}>
                                                <p>CULTURE</p>
                                                <p>.</p>
                                                <p>History</p>
                                            </div> */}
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
                                            {/* <div className={styles["video-news-background"]}>
                                                <p>CULTURE</p>
                                                <p>.</p>
                                                <p>History</p>
                                            </div> */}
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