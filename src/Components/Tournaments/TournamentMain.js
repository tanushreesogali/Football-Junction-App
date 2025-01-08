import React , {useState} from 'react';
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

import Gallery from './Gallery';
import TableT from './TableT';
import Matches from './Matches';
import Overview from './Overview';
import Teams from './Teams';
import Guidelines from './Guidelines';


export default function TournamentMain() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        console.log("Button clicked");
        navigate("/");
    };
    
    useVisibility();
    const [activeTab, setActiveTab] = useState("Overview");
    const renderContent = () => {
        switch (activeTab) {
          case "Overview":
            return (
              <div>
                <Overview/>
              </div>
            );
          case "Guidelines":
            return (
              <div>
                <Guidelines/>
              </div>
            );
          case "Matches":
            return (
            <div>
                <Matches/>
            </div>
            );
          case "Table":
            return (
              <div>
                <TableT/>
              </div>
            );
            case "Teams":
                return (
                  <div>
                    <Teams/>
                  </div>
                );
            case "Gallery":
                return (
                    <div>
                    <Gallery/>
                    </div>
                );
          default:
            return null;
        }
      };
  return (
    <div>
        <div className="container-align">
            <button className="back-button" type="button" onClick={handleBackClick} id="home-button">
                <LeftArrow className="back-button-icon"/>
            </button>

            <Header/>
            <Socials/>
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
                        
                        <img className={styles['ball-game']} src={ballgame} alt='ball-game-img'/>
                    </div>
                    <div className={styles['tournament-header-con1']}>
                        <img className={styles['ball-game']} src={ballgame} alt='ball-game-img'/>
                        <div className={styles['header-content']}>
                            <p className={styles['header-title']}>Corporate Ball Game
                            Season 2</p>
                            <p className={styles['header-subtitle']}>
                            SCHEDULE:<br/><br/>
                            Venue: NKDA Football Stadium, New Town 7-a-side football tournament for Corporate Teams
                            </p>
                        </div>
                        
                        
                    </div>
                    
                </div>

                <div className={styles['tournament-card2']}>
                    <div className={styles['body-content']}>
                        <img src={ballgame} alt='logo-ball-game' className={styles['body-img']}/>
                        <p>Corporate Ball Game SEASON 2</p>
                    </div>
                    <nav className={styles['tournament-tabs']}>
                        <button
                            className={`${styles['tab-button']} ${activeTab === "Overview" ? styles['active-in-tab'] : styles['in-tab']}`}
                            onClick={() => setActiveTab("Overview")}
                        >
                            Overview
                        </button>
                        <button
                            className={`${styles['tab-button']} ${activeTab === "Guidelines" ? styles['active-in-tab'] : styles['in-tab']}`}
                            onClick={() => setActiveTab("Guidelines")}
                        >
                            Guidelines
                        </button>
                        <button
                            className={`${styles['tab-button']} ${activeTab === "Matches" ? styles['active-in-tab'] : styles['in-tab']}`}
                            onClick={() => setActiveTab("Matches")}
                        >
                            Matches
                        </button>
                        <button
                            className={`${styles['tab-button']} ${activeTab === "Table" ? styles['active-in-tab'] : styles['in-tab']}`}
                            onClick={() => setActiveTab("Table")}
                        >
                            Table
                        </button>
                        <button
                            className={`${styles['tab-button']} ${activeTab === "Teams" ? styles['active-in-tab'] : styles['in-tab']}`}
                            onClick={() => setActiveTab("Teams")}
                        >
                            Teams
                        </button>
                        <button
                            className={`${styles['tab-button']} ${activeTab === "Gallery" ? styles['active-in-tab'] : styles['in-tab']}`}
                            onClick={() => setActiveTab("Gallery")}
                        >
                            Gallery
                        </button>
                    </nav>
                    <div className={styles['content']}>{renderContent()}</div>
                </div>

            </div>
                
        </div>
        
        <Footer id="footer" className="footer-class"/>
    </div>
  );
}


