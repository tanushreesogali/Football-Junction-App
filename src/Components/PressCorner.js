import React from 'react';
import Header from "./Header";
import Socials from "./Socials";
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

// hooks
import useVisibility from '../Hooks/useVisibility';

// images
import videoimg from "./images/video-icon.png"
// components
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import ViewAll from './ViewAll';


// SVGS
import { ReactComponent as TimeIcon } from './icons/time-icon.svg';
import { ReactComponent as CommentIncon } from './icons/comment-icon.svg';
import { ReactComponent as CircleIcon } from "./icons/Circle-icon.svg";
import { ReactComponent as PlayIcon } from "./icons/Play-icon.svg";


export default function PressCorner() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        console.log("Button clicked");
        navigate("/");
    };
    const handleNewsClick =() =>{
        navigate("/press-news");
    }
    useVisibility();
  return (
    <div>
    <div className="container-align">
        <button className="back-button" type="button" onClick={handleBackClick} id="home-button">
            <LeftArrow className="back-button-icon"/>
        </button>

        <Header/>
        <Socials/>
        <div className="press-corner-page">
            <div className="press-corner-content">
                <p className="press-corner-title">PRESS CORNER</p>
            </div>


            {/* NEWS sections first 3 containers */}
            <div className="news-section">
                <div className="news-section-container">
                    <div className="news-item-container">
                        <img className="news-item-image" alt="news-item-img" />
                        <div className="news-item-content">
                            <p className="news-item-title">
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className="news-item-text-container">
                                <div className="news-item-viewall-container">
                                    <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                        <span className="news-item-viewall-text">FULL STORY</span>
                                        <RightArrow className="news-item-viewall-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-item-container">
                        <img className="news-item-image" alt="news-item-img" />
                        <div className="news-item-content">
                            <p className="news-item-title">
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className="news-item-text-container">
                                <div className="news-item-viewall-container">
                                    <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                        <span className="news-item-viewall-text">FULL STORY</span>
                                        <RightArrow className="news-item-viewall-icon" />
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
                        <img className="news-item-image" alt="news-item-img" />
                        <div className="news-item-content">
                            <p className="news-item-title">
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className="news-item-text-container">
                                <div className="news-item-viewall-container">
                                    <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                        <span className="news-item-viewall-text">FULL STORY</span>
                                        <RightArrow className="news-item-viewall-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-item-container">
                        <img className="news-item-image" alt="news-item-img" />
                        <div className="news-item-content">
                            <p className="news-item-title">
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className="news-item-text-container">
                                <div className="news-item-viewall-container">
                                    <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                        <span className="news-item-viewall-text">FULL STORY</span>
                                        <RightArrow className="news-item-viewall-icon" />
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
                        <img className="news-item-image" alt="news-item-img" />
                        <div className="news-item-content">
                            <p className="news-item-title">
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className="news-item-text-container">
                                <div className="news-item-viewall-container">
                                    <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                        <span className="news-item-viewall-text">FULL STORY</span>
                                        <RightArrow className="news-item-viewall-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-item-container">
                        <img className="news-item-image" alt="news-item-img" />
                        <div className="news-item-content">
                            <p className="news-item-title">
                                India begin AFC Asian cup qualifiers journey Against Cambodia
                            </p>
                            <div className="news-item-text-container">
                                <div className="news-item-viewall-container">
                                    <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                        <span className="news-item-viewall-text">FULL STORY</span>
                                        <RightArrow className="news-item-viewall-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 4 */}
            <div className='news-column-frame'>

                <div className='news-more-section'>

                    <div className="news-section-container">
                        <div className="news-item-container">
                            <img className="news-item-image" alt="news-item-img" />
                            <div className="news-item-content">
                                <p className="news-item-title">
                                    India begin AFC Asian cup qualifiers journey Against Cambodia
                                </p>
                                <div className="news-item-text-container">
                                    <div className="news-item-viewall-container">
                                        <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                            <span className="news-item-viewall-text">FULL STORY</span>
                                            <RightArrow className="news-item-viewall-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-section-container">
                        <div className="news-item-container">
                            <img className="news-item-image" alt="news-item-img" />
                            <div className="news-item-content">
                                <p className="news-item-title">
                                    India begin AFC Asian cup qualifiers journey Against Cambodia
                                </p>
                                <div className="news-item-text-container">
                                    <div className="news-item-viewall-container">
                                        <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                            <span className="news-item-viewall-text">FULL STORY</span>
                                            <RightArrow className="news-item-viewall-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-section-container">
                        <div className="news-item-container">
                            <img className="news-item-image" alt="news-item-img" />
                            <div className="news-item-content">
                                <p className="news-item-title">
                                    India begin AFC Asian cup qualifiers journey Against Cambodia
                                </p>
                                <div className="news-item-text-container">
                                    <div className="news-item-viewall-container">
                                        <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                            <span className="news-item-viewall-text">FULL STORY</span>
                                            <RightArrow className="news-item-viewall-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-section-container">
                        <div className="news-item-container">
                            <img className="news-item-image" alt="news-item-img" />
                            <div className="news-item-content">
                                <p className="news-item-title">
                                    India begin AFC Asian cup qualifiers journey Against Cambodia
                                </p>
                                <div className="news-item-text-container">
                                    <div className="news-item-viewall-container">
                                        <button className="news-item-viewall-button" onClick={handleNewsClick}>
                                            <span className="news-item-viewall-text">FULL STORY</span>
                                            <RightArrow className="news-item-viewall-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Breaking news section */}
                <div className='breaking-news-section'>
                    <div className='breaking-news-title'>
                        <p className='breaking-news-text'>Breaking News</p>
                    </div>
                    <div className='breaking-news-container'>
                        <p className='brk-news-time'>5 hours ago</p>
                        <p className='brk-news-content'>Can Inter Kashi finally overtake Real kashmir in the Durand Cup Final?</p>
                    </div>
                    <div className='breaking-news-container'>
                        <p className='brk-news-time'>5 hours ago</p>
                        <p className='brk-news-content'>Can Inter Kashi finally overtake Real kashmir in the Durand Cup Final?</p>
                    </div>
                    <div className='breaking-news-container'>
                        <p className='brk-news-time'>5 hours ago</p>
                        <p className='brk-news-content'>Can Inter Kashi finally overtake Real kashmir in the Durand Cup Final?</p>
                    </div>
                    <div className='breaking-news-container'>
                        <p className='brk-news-time'>5 hours ago</p>
                        <p className='brk-news-content'>Can Inter Kashi finally overtake Real kashmir in the Durand Cup Final?</p>
                    </div>
                    <div className='breaking-news-container'>
                        <p className='brk-news-time'>5 hours ago</p>
                        <p className='brk-news-content'>Can Inter Kashi finally overtake Real kashmir in the Durand Cup Final?</p>
                    </div>
                    <div className='breaking-news-container'>
                        <p className='brk-news-time'>5 hours ago</p>
                        <p className='brk-news-content'>Can Inter Kashi finally overtake Real kashmir in the Durand Cup Final?</p>
                    </div>
                    <ViewAll/>
                </div>

            </div>  

            {/* Video News Section */}
            <div className='video-news-section'>
                <div className='video-news-container'>
                    <div className='video-news-thumbnail'>
                        <img src={videoimg} className='video-news-img' alt='video-news-img'/>
                        <CircleIcon className='circle'/>
                        <PlayIcon className='play'/>
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
                        <CircleIcon className='circle'/>
                        <PlayIcon className='play'/>
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
                        <CircleIcon className='circle'/>
                        <PlayIcon className='play'/>
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


