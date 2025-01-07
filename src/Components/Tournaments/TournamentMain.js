import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Header';
import Socials from '../Socials';
import Footer from '../Footer';

// hooks
import useVisibility from '../../Hooks/useVisibility';

// components
import LeftArrow from '../LeftArrow';

import ballgame from "../images/corporate-ball-game-logo.png"

import styles from "./Tournaments.module.css";

export default function TournamentMain() {

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
            
        </div>
        <div className={styles['tournament-page']} >
            <div className={styles['tournament-card1']}>
                <div className={styles['header-con-1']}>
                    <p className={styles['tournament-card1-title']}>Corporate Football</p>
                </div>
                <div className={styles['tournament-header-con']}>
                    <div className={styles['header-content']}>
                        <p className={styles['header-title']}>Corporate Ball Game
                        Season 2</p>
                        <p className={styles['header-subtitle']}>
                        SCHEDULE:<br/><br/>
                        Venue: NKDA Football Stadium, New Town 7-a-side football tournament for Corporate Teams
                        </p>
                    </div>
                    <div className={styles['ball-game-div']}>
                        <img className={styles['ball-game']} src={ballgame} alt='ball-game-img'/>
                    </div>


                </div>

            </div>
        </div>
        <Footer id="footer" className="footer-class"/>
    </div>
  );
}


