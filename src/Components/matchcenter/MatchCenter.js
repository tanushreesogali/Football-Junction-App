import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Socials from '../Socials';
import { useNavigate } from "react-router-dom";

import styles from "./MatchCenter.module.css"
// hooks
import useVisibility from '../../Hooks/useVisibility';


import LeftArrow from '../LeftArrow';

export default function MatchCenter() {


    const navigate = useNavigate();
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
        <div className={styles['press-corner-page']}>
            <div className={styles['press-corner-content']}>
                <p className={styles['press-corner-title']}>MATCH CENTER</p>
            </div>

            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                            <div className={styles['match-center-tiebreaker']}>
                                <div className={styles['tiescore']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-tie']}>Tiebreaker</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-statue']}>FT</div>
                            <div className={styles['match-center-score-container']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>Mohun Bagan Super Giant</p>  
                                </div>
                                <div className={styles['score']}>
                                    <p>3</p>
                                    <p>-</p>
                                    <p>2</p>
                                </div>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>East Bengal FC</p>
                                </div>
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


