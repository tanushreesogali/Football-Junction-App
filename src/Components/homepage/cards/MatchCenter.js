import React, { useState } from 'react';
import teamicon1 from "../../images/Match Center Icon.png";

import teamicon2 from "../../images/Match Center Icon (1).png";
import teamicon3 from "../../images/Match Center Icon (2).png";
import teamicon4 from "../../images/Match Center Icon (3).png";
import team1 from "../../images/Match Center Team Image.png";

import team2 from "../../images/Match Center Team Image (1).png";
import ViewAll from "../../ViewAll";
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";

import useNavigateWithScroll from '../../../Hooks/useNavigateWithScroll';

const MatchCenter = () => {
    const navigate = useNavigateWithScroll();
    const matches = [
        {
            homeTeam: "Mohun Bagan Super Giant",
            homeTeamLogo: team1,
            awayTeam: "East Bengal FC",
            awayTeamLogo: team2,
            homeScore: 3,
            awayScore: 2,
            minute: "33'"
        },
        {
            homeTeam: "Kolkata Super Giant",
            homeTeamLogo: team1,
            awayTeam: "West Bengal FC",
            awayTeamLogo: team2,
            homeScore: 2,
            awayScore: 1,
            minute: "45'"
        },
    ];

    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

    const handlePrevMatch = () => {
        setCurrentMatchIndex((prev) => 
            prev === 0 ? matches.length - 1 : prev - 1
        );
    };

    const handleNextMatch = () => {
        setCurrentMatchIndex((prev) => 
            prev === matches.length - 1 ? 0 : prev + 1
        );
    };

    const handleMatchCenterClick = () => {
        console.log("to match")
        navigate("/match-center");
    };

    const currentMatch = matches[currentMatchIndex];

    return (
        <div className="match-center-container">
            <div onClick={handlePrevMatch}>
                <LeftArrow className="match-center-nav"/>
            </div>
            <div className="match-center-content">
                <div className="match-center-header">
                    <p className="match-center-title">MATCH CENTER</p>
                </div>
                <div className="match-center-details">
                    <div className="match-center-status-container">
                        <div className="match-center-statue">{currentMatch.minute}</div>
                        <div className="match-center-score-container">
                            <div className="match-center-team-container">
                                <img src={currentMatch.homeTeamLogo} alt={currentMatch.homeTeam} />
                                <p className="match-center-team-name">{currentMatch.homeTeam}</p>
                            </div>
                            <div className="score">
                                <p>{currentMatch.homeScore}</p>
                                <p>-</p>
                                <p>{currentMatch.awayScore}</p>
                            </div>
                            <div className="match-center-team-container">
                                <p className="match-center-team-name">{currentMatch.awayTeam}</p>
                                <img src={currentMatch.awayTeamLogo} alt={currentMatch.awayTeam} />
                            </div>
                        </div>
                        <img className="live-match" src={teamicon1} alt="Indian Super League" />
                    </div>
                    <div className="match-center-icons-container">
                        <img src={teamicon1} alt="team1"/>
                        <img src={teamicon2} alt="team2"/>
                        <img src={teamicon3} alt="team3"/>
                        <img src={teamicon4} alt="team4"/>
                    </div>
                    <div className="match-center-view-all" onClick={handleMatchCenterClick}>
                        <ViewAll/>
                    </div>
                </div>
            </div>
            <div onClick={handleNextMatch}>
                <RightArrow className="match-center-nav"/>
            </div>
        </div>
    );
};

export default MatchCenter;