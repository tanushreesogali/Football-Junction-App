// CAMP

import React, { useState } from "react";
import LeftArrow from "../LeftArrow";
import Header from "../Header";
import Socials from "../Socials";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

import useVisibility from '../../Hooks/useVisibility.js';

import memorial from "../images/camp-img.png";

import Gallery from "./memorial-pages/Gallery.js";
import Itinerary from "./memorial-pages/Itinerary";
import KeyActivity from "./memorial-pages/KeyActivity.js";
import Overview from "./memorial-pages/Overview.js";

import './InitiativesCards.css';

const InitiativesPage3 = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        console.log("Button clicked");
        navigate("/initiatives");
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
      case "Key Activity":
        return (
          <div>
            <KeyActivity/>
          </div>
        );
      case "Itinerary":
        return (
        <div>
            <Itinerary/>
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
            <div className="press-news-page">
            <p className="press-corner-title">INITIATIVES</p>
            
            <div className="initiatives-image-container">
                <p>DEBASIS BHATTACHARYA MEMORIAL</p>
                <img
                src={memorial}
                alt="Football Training Camp"
                />
            </div>
            <nav className="initiatives-tabs">
                <button className={`tab-button ${activeTab === "Overview" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Overview")}>Overview</button>
                <button className={`tab-button ${activeTab === "Key Activity" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Key Activity")}>Key Activities</button>
                <button className={`tab-button ${activeTab === "Itinerary" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Itinerary")}>Itinerary</button>
                <button className={`tab-button ${activeTab === "Gallery" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Gallery")}>Gallery</button>
            </nav>
            <div className="memorial-content">{renderContent()}</div>
            </div>
        </div>
        <Footer id="footer" className="footer-class"/>
    </div>
  );
};

export default InitiativesPage3;
