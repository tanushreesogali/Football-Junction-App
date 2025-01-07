import React from "react";
import campgallery from "../../images/camp-gallery.png"

const Gallery = () =>{
    return(
        <div className="gallery-card">
            <div className="gallery-container">
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
            </div>
            <div className="gallery-container">
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
                <img src={campgallery} alt="gallery-img"/>
            </div>
            
        </div>
    )
}

export default Gallery;