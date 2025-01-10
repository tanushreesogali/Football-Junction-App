import React from "react";

// import Footer from './Components/Footer';
// import MainBody from "./Components/MainBody";
// import useVisibility from "./Hooks/useVisibility";
import Footer from "../Footer";
import MainBody from "./MainBody";
import useVisibility from "../../Hooks/useVisibility";

export default function Home() {
  useVisibility();

  return (
    <div>
      <MainBody />
      <Footer id="footer" className="footer-class" />
    </div>
  );
}