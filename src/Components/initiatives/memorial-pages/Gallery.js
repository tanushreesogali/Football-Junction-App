import React from "react";
import memgallery from "../../images/mem-gallery.png"

const Gallery = () =>{
    return(
        <div className="gallery-card">
            <div className="gallery-container">
                <img src={memgallery} alt="gallery-img"/>
                <img src={memgallery} alt="gallery-img"/>
                <img src={memgallery} alt="gallery-img"/>
            </div>
            <div className="gallery-container">
                <img src={memgallery} alt="gallery-img"/>
                <img src={memgallery} alt="gallery-img"/>
                <img src={memgallery} alt="gallery-img"/>
            </div>
            
        </div>
    )
}

export default Gallery;