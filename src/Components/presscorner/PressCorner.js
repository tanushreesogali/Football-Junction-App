import React from 'react';
import Header from "../Header";
import Footer from "../Footer"
import Socials from "../Socials"


// hooks
import useVisibility from '../../Hooks/useVisibility';
import useNavigateWithScroll from '../../Hooks/useNavigateWithScroll';

// images
// import videoimg from "../images/video-icon.png"
import img1 from "./articles-gallery/img1.jpeg";
import img2 from "./articles-gallery/img2.jpeg";
import img3 from "./articles-gallery/img3.jpeg";
import img4 from "./articles-gallery/img4.jpeg";
import img5 from "./articles-gallery/img5.jpeg";
import img6 from "./articles-gallery/img6.jpeg";
import img7 from "./articles-gallery/img7.jpeg";
// components
import RightArrow from "../RightArrow";
import LeftArrow from "../LeftArrow";
import ViewAll from '../ViewAll';

import styles from "./PressCorner.module.css";


// SVGS
import { ReactComponent as TimeIcon } from '../icons/time-icon.svg';
import { ReactComponent as CommentIncon } from '../icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "../icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "../icons/Play-icon.svg";


export default function PressCorner() {

    const navigate = useNavigateWithScroll();
    const handleBackClick = () => {
        console.log("Button clicked");
        navigate("/");
    };
    useVisibility();
  return (
    <div>
    <div className="container-align">
        <button className="back-button" type="button" onClick={handleBackClick} id="home-button">
            <LeftArrow className="back-button-icon"/>
        </button>

        <Header/>
        <Socials/>
        <div className={styles["press-corner-page"]}>
            <div className={styles["press-corner-content"]}>
                <p className={styles["press-corner-title"]}>PRESS CORNER</p>
            </div>


            {/* NEWS sections first 3 containers */}
            <div className={styles["news-section"]}>
                <div className={styles["news-section-container"]}>
                    <div className={styles["news-item-container"]}>
                        <img src={img1} className={styles["news-item-image"]} alt="news-item-img"/>
                        
                        <div className={styles["news-item-content"]}>
                            <p className={styles["news-item-title"]}>
                            Hemanta Dora Joins BSS as Head Coach
                            </p>
                            <div className={styles["news-item-text-container"]}>
                                <div className={styles["news-item-viewall-container"]}>
                                    <button
                                        className={styles["news-item-viewall-button"]}
                                        onClick={() => {navigate('/press-news1')}}
                                    >
                                        <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                        <RightArrow className={styles["news-item-viewall-icon"]} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["news-item-container"]}>
                        <img src={img2} className={styles["news-item-image"]} alt="news-item-img" />
                        <div className={styles["news-item-content"]}>
                            <p className={styles["news-item-title"]}>
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className={styles["news-item-text-container"]}>
                                <div className={styles["news-item-viewall-container"]}>
                                    <button
                                        className={styles["news-item-viewall-button"]}
                                        onClick={() => {navigate('/press-news2')}}
                                    >
                                        <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                        <RightArrow className={styles["news-item-viewall-icon"]} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles["news-section"]}>
                <div className={styles["news-section-container"]}>
                    <div className={styles["news-item-container"]}>
                        <img src={img3} className={styles["news-item-image"]} alt="news-item-img" />
                        <div className={styles["news-item-content"]}>
                            <p className={styles["news-item-title"]}>
                            MOHUN BAGAN AWARNESS DAY MEETING ANNOUNCES BIG CHANGES
                            </p>
                            <div className={styles["news-item-text-container"]}>
                                <div className={styles["news-item-viewall-container"]}>
                                    <button
                                        className={styles["news-item-viewall-button"]}
                                        onClick={() => {navigate('/press-news3')}}
                                    >
                                        <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                        <RightArrow className={styles["news-item-viewall-icon"]} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["news-item-container"]}>
                        <img src={img4} className={styles["news-item-image"]} alt="news-item-img" />
                        <div className={styles["news-item-content"]}>
                            <p className={styles["news-item-title"]}>
                            Mohun Bagan begins Scouting Programme
                            </p>
                            <div className={styles["news-item-text-container"]}>
                                <div className={styles["news-item-viewall-container"]}>
                                    <button
                                        className={styles["news-item-viewall-button"]}
                                        onClick={() => {navigate('/press-news4')}}
                                    >
                                        <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                        <RightArrow className={styles["news-item-viewall-icon"]} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 4 */}
            <div className={styles['news-column-frame']}>

                <div className={styles['news-more-section']}>

                    <div className={styles["news-section-container"]}>
                        <div className={styles["news-item-container"]}>
                            <img src={img5} className={styles["news-item-image"]} alt="news-item-img" />
                            <div className={styles["news-item-content"]}>
                                <p className={styles["news-item-title"]}>
                                Supreme Court Appoints Committee of Administrators To Manage Affairs of AIFF
                                </p>
                                <div className={styles["news-item-text-container"]}>
                                    <div className={styles["news-item-viewall-container"]}>
                                        <button
                                            className={styles["news-item-viewall-button"]}
                                            onClick={() => {navigate('/press-news5')}}
                                        >
                                            <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                            <RightArrow className={styles["news-item-viewall-icon"]} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["news-section-container"]}>
                        <div className={styles["news-item-container"]}>
                            <img src={img6} className={styles["news-item-image"]} alt="news-item-img" />
                            <div className={styles["news-item-content"]}>
                                <p className={styles["news-item-title"]}>
                                Today a meeting was held with the teams of Premier Division A group at the IFA office
                                </p>
                                <div className={styles["news-item-text-container"]}>
                                    <div className={styles["news-item-viewall-container"]}>
                                        <button
                                            className={styles["news-item-viewall-button"]}
                                            onClick={() => {navigate('/press-news6')}}
                                        >
                                            <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                            <RightArrow className={styles["news-item-viewall-icon"]} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["news-section-container"]}>
                        <div className={styles["news-item-container"]}>
                            <img src={img7} className={styles["news-item-image"]} alt="news-item-img" />
                            <div className={styles["news-item-content"]}>
                                <p className={styles["news-item-title"]}>
                                Registration of New Clubs at IFA
                                </p>
                                <div className={styles["news-item-text-container"]}>
                                    <div className={styles["news-item-viewall-container"]}>
                                        <button
                                            className={styles["news-item-viewall-button"]}
                                            onClick={() => {navigate('/press-news7')}}
                                        >
                                            <span className={styles["news-item-viewall-text"]}>FULL STORY</span>
                                            <RightArrow className={styles["news-item-viewall-icon"]} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Breaking news section */}
                <div className={styles["breaking-news-section"]}>
                    <div className={styles["breaking-news-title"]}>
                        <p className={styles["breaking-news-text"]}>Breaking News</p>
                    </div>
                    <div className={styles["breaking-news-container"]}>
                        <p className={styles["brk-news-time"]}>5 hours ago</p>
                        <p className={styles["brk-news-content"]}>
                            Can Inter Kashi finally overtake Real Kashmir in the Durand Cup Final?
                        </p>
                    </div>
                    <div className={styles["breaking-news-container"]}>
                        <p className={styles["brk-news-time"]}>5 hours ago</p>
                        <p className={styles["brk-news-content"]}>
                            Can Inter Kashi finally overtake Real Kashmir in the Durand Cup Final?
                        </p>
                    </div>
                    <div className={styles["breaking-news-container"]}>
                        <p className={styles["brk-news-time"]}>5 hours ago</p>
                        <p className={styles["brk-news-content"]}>
                            Can Inter Kashi finally overtake Real Kashmir in the Durand Cup Final?
                        </p>
                    </div>
                    <div className={styles["breaking-news-container"]}>
                        <p className={styles["brk-news-time"]}>5 hours ago</p>
                        <p className={styles["brk-news-content"]}>
                            Can Inter Kashi finally overtake Real Kashmir in the Durand Cup Final?
                        </p>
                    </div>
                    <ViewAll />
                </div>
            </div>  

            {/* Video News Section */}
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
                        <div className={styles["video-news-background"]}>
                            <p>CULTURE</p>
                            <p>.</p>
                            <p>History</p>
                        </div>
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


