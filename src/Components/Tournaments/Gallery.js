import React from "react";
import img1 from "./gallery/img1.png";
import img2 from "./gallery/img2.png";
import img3 from "./gallery/img3.png";
import img4 from "./gallery/img4.png";
import img5 from "./gallery/img5.png";
import img6 from "./gallery/img6.png";
import img7 from "./gallery/img7.png";
import img8 from "./gallery/img8.png";
import img9 from "./gallery/img9.png";
import img10 from "./gallery/img10.png";
import img11 from "./gallery/img11.png";
import img12 from "./gallery/img12.png";

import styles from "./Tournaments.module.css"

const Gallery = () =>{
    return(
        <div className={styles["gallery-card"]}>
            <div className={styles["gallery-container"]}>
                <img src={img1} alt="gallery-img"/>
                <img src={img2} alt="gallery-img"/>
                <img src={img3} alt="gallery-img"/>
                <img src={img4} alt="gallery-img"/>
            </div>
            <div className={styles["gallery-container"]}>
                <img src={img5} alt="gallery-img"/>
                <img src={img6} alt="gallery-img"/>
                <img src={img7} alt="gallery-img"/>
                <img src={img8} alt="gallery-img"/>
            </div>
            <div className={styles["gallery-container"]}>
                <img src={img9} alt="gallery-img"/>
                <img src={img10} alt="gallery-img"/>
                <img src={img11} alt="gallery-img"/>
                <img src={img12} alt="gallery-img"/>
            </div>    
        </div>
    )
}

export default Gallery;