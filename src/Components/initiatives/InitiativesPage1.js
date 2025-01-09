import React, { useState } from "react";

import LeftArrow from "../LeftArrow";
import Header from "../Header";
import Socials from "../Socials";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import useVisibility from '../../Hooks/useVisibility.js';

import training from "../images/training-img.png";

import Overview from "./training-pages/Overview.js";
import Impact from "./training-pages/Impact.js";
import Methods from "./training-pages/Methods.js";
import Partnership from "./training-pages/Partnership.js";

import './InitiativesCards.css';


const InitiativesPage1 = () => {
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
      case "Methods":
        return (
          <div>
            <Methods/>
          </div>
        );
      case "Impact":
        return (
        <div>
            <Impact/>
        </div>
        );
      case "Partnership":
        return (
          <div>
            <Partnership/>
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
                  <p>FOOTBALL TRAINING CAMP IN SCHOOLS</p>
                  <img
                  src={training}
                  alt="Football Training Camp"
                  />
              </div>
              <nav className="initiatives-tabs">
                  <button className={`tab-button ${activeTab === "Overview" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Overview")}>Overview</button>
                  <button className={`tab-button ${activeTab === "Methods" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Methods")}>Methods</button>
                  <button className={`tab-button ${activeTab === "Impact" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Impact")}>Impact</button>
                  <button className={`tab-button ${activeTab === "Partnership" ? "active-in-tab" : "in-tab"}`} onClick={() => setActiveTab("Partnership")}>Partnership</button>
              </nav>
              <div className="training-content">{renderContent()}</div>
            </div>
        </div>
        <Footer id="footer" className="footer-class"/>
    </div>
  );
};

export default InitiativesPage1;
