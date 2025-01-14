import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Socials from '../Socials';


import styles from "./MatchCenter.module.css"
// hooks
import useVisibility from '../../Hooks/useVisibility';
import useNavigateWithScroll from '../../Hooks/useNavigateWithScroll';

import LeftArrow from '../LeftArrow';

export default function MatchCenter() {


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
        <div className={styles['press-corner-page']}>
            <div className={styles['press-corner-content']}>
                <p className={styles['press-corner-title']}>MATCH CENTER</p>
            </div>

            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>STAR TV</p>  
                                    </div>
                                
                                    <div className={styles['match-center-score-container']}>
                                        <div className={styles['match-center-statue']}>FT</div>
                                        <div className={styles['score']}>
                                            <p>0</p>
                                            <p>-</p>
                                            <p>5</p>
                                        </div> 
                                    </div>   
                                
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ZOMATO</p>
                                    </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>SIEMENS</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p></p>
                                        <p>-</p>
                                        <p></p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INFOSYS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>GENPACT</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    <div className={styles['match-center-tiebreaker']}>
                                        <div className={styles['tiescore']}>
                                            <p>2</p>
                                            <p>-</p>
                                            <p>3</p>
                                        </div>
                                        <div className={styles['match-center-tie']}>Tiebreaker</div>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ITC</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>GLOBSYNC</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>1</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INCOME TAX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - GOLD</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>TCS</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>1</p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>BRAITHWAITE</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ABP DIGITAL</p>  
                                </div>  
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>3</p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INFIFLEX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>CAPEGEMINI</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>1</p>
                                        <p>-</p>
                                        <p>1</p>
                                    </div>
                                    <div className={styles['match-center-tiebreaker']}>
                                        <div className={styles['tiescore']}>
                                            <p>1</p>
                                            <p>-</p>
                                            <p>3</p>
                                        </div>
                                        <div className={styles['match-center-tie']}>Tiebreaker</div>
                                    </div> 
                                    
                                </div>
                                
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ERNST & YOUNG</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>ERICSSON</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>3</p>
                                    </div> 
                                </div>

                                <div className={styles['match-center-team-container']}>
                                    <p className={styles['match-center-team-name']}>SUNKNOWLEDGE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, QUATERFINAL - BRONZE</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ERICSSON</p>  
                                </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p></p>
                                        <p>-</p>
                                        <p></p>
                                    </div>
                                    
                                </div>
                            
                            <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>CAPEGEMINI</p>
                            </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>GENPACT</p>  
                                    </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p></p>
                                        <p>-</p>
                                        <p></p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>SIEMENS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ABP DIGITAL</p>  
                                    </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>5</p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>TCS</p>
                                    </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INCOME TAX</p>  
                                </div>
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>STAR TV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, KNOCKOUT SEMIFINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ITC</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>2</p>
                                    </div>
                                    
                                </div>

                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INFOSYS</p>
                                    </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>GLOBSYNC</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    
                                </div>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ZOMATO</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, KNOCKOUT SEMIFINAL - BRONZE</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>CAPEGEMINI</p>  
                                    </div>
                                
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>3</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    
                                </div>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>GENPACT</p>
                                    </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>TCS</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    <div className={styles['match-center-statue']}>FT</div>
                                    
                                    <div className={styles['score']}>
                                        <p>7</p>
                                        <p>-</p>
                                        <p>1</p>
                                    </div>
                                    
                                </div>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>STAR TV</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, KNOCKOUT SEMIFINAL - GOLD</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>BRAITHWAITE</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>3</p>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INFIFLEX</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['match-center-points-container']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ERNST & YOUNG</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>3</p>
                                    </div>
                                    <div className={styles['match-center-tiebreaker']}>
                                        <div className={styles['tiescore']}>
                                            <p>1</p>
                                            <p>-</p>
                                            <p>3</p>
                                        </div>
                                        <div className={styles['match-center-tie']}>Tiebreaker</div>
                                    </div>
                                    
                                </div>
                                <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>SUNKNOWLEDGE</p>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, KNOCKOUT FINAL - BRONZE</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container1']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>TCS</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    <div className={styles['match-center-tiebreaker']}>
                                        <div className={styles['tiescore']}>
                                            <p>2</p>
                                            <p>-</p>
                                            <p>3</p>
                                        </div>
                                        <div className={styles['match-center-tie']}>Tiebreaker</div>
                                    </div>
                                    
                                </div>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>CAPEGEMINI</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, KNOCKOUT FINAL - SILVER</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container1']}>

                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>ZOMATO</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>1</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                    
                                </div>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INFOSYS</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className={styles['match-container1']}>
                <p className={styles['match-container-title']}>DAY 3 MATCHES, KNOCKOUT FINAL - GOLD</p>
                <div className={styles['match-frame']}>
                    <div className={styles['match-section']}>
                        <div className={styles['match-center-points-container1']}>
                            <div className={styles['match-center-full-div']}>
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>SUNKNOWLEDGE</p>  
                                    </div>
                                <div className={styles['match-center-score-container']}>
                                    
                                    <div className={styles['match-center-statue']}>FT</div>
                                    <div className={styles['score']}>
                                        <p>0</p>
                                        <p>-</p>
                                        <p>0</p>
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
                                
                                    <div className={styles['match-center-team-container']}>
                                        <p className={styles['match-center-team-name']}>INFIFLEX</p>
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


