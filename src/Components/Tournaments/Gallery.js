import React from "react";
import campgallery from "../images/camp-gallery.png"
import styles from "./Tournaments.module.css"

const Gallery = () =>{
    return(
        <div className={styles["gallery-card"]}>
            <div className={styles["gallery-container"]}>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
            </div>
            <div className={styles["gallery-container"]}>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
            </div>
            <div className={styles["gallery-container"]}>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
            </div>    
        </div>
    )
}

export default Gallery;