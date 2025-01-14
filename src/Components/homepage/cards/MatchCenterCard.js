import React from 'react';
import team1 from "../../images/Match Center Team Image.png";
import team2 from "../../images/Match Center Team Image (1).png";
import team3 from "../../images/Match Center Team Image (2).png";

const match_data = {
    time: "33’",
    team1: {
        name: "Mohun Bagan Super Giant",
        score: 3,
        logo: team1, 
    },
    team2: {
        name: "East Bengal FC",
        score: 2,
        logo: team2, 
    },
    leagueLogo: team3, 
};

const MatchCenterCard = () => {
    return (
        
            <div className="match-center-status-container">
                <div className="match-center-statue">{match_data.time}</div>
                <div className="match-center-score-container">
                    <div className="match-center-team-container">
                        <img src={match_data.team1.logo} alt={match_data.team1.name} />
                        <p className="match-center-team-name">{match_data.team1.name}</p>
                    </div>
                    <div className="score">
                        <p>{match_data.team1.score}</p>
                        <p>-</p>
                        <p>{match_data.team2.score}</p>
                    </div>
                    <div className="match-center-team-container">
                        <p className="match-center-team-name">{match_data.team2.name}</p>
                        <img src={match_data.team2.logo} alt={match_data.team2.name} />
                    </div>
                </div>
                <img className="live-match" src={match_data.leagueLogo} alt="Indian Super League" />
            </div>
        
    );
};

export default MatchCenterCard;
