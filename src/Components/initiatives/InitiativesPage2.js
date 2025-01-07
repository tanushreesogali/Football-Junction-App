// MEMORIAL

import React, { useState } from "react";
// import "./FootballTrainingCamp.css";
import LeftArrow from "../LeftArrow";
import Header from "../Header";
import Socials from "../Socials";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import useVisibility from '../../Hooks/useVisibility.js';

import camp from "../images/camp-img.png"

import Gallery from "./camp-pages/Gallery.js";
import Guest from "./camp-pages/Guest.js";
import Objective from "./camp-pages/Objective.js";
import Overview from "./camp-pages/Overview.js";

const InitiativesPage2 = () => {
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
      case "Objective":
        return (
          <div>
            <Objective/>
          </div>
        );
      case "Guest":
        return (
        <div>
            <Guest/>
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
                <p>FOOTBALL BOOSTER CAMP</p>
                <img
                src={camp}
                alt="Camp"
                />
            </div>
            <nav className="initiatives-tabs">
                <button className={`tab-button ${activeTab === "Overview" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Overview")}>Overview</button>
                <button className={`tab-button ${activeTab === "Objective" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Objective")}>Objective</button>
                <button className={`tab-button ${activeTab === "Guest" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Guest")}>Guest</button>
                <button className={`tab-button ${activeTab === "Gallery" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Gallery")}>Gallery</button>
            </nav>
            <div className="camp-content">{renderContent()}</div>
            </div>
        </div>
        <Footer id="footer" className="footer-class"/>
    </div>
  );
};

export default InitiativesPage2;
