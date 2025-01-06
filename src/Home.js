import React from "react";
// import Header from './Components/Header';
import Footer from './Components/Footer';
import MainBody from "./Components/MainBody";
import useVisibility from "./Hooks/useVisibility";

export default function Home() {
  useVisibility();

  return (
    <div>
      <MainBody />
      <Footer id="footer" className="footer-class" />
    </div>
  );
}