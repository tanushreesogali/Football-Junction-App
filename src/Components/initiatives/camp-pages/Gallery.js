import React from "react";
import img1 from "../camp-gallery/img1.png";
import img2 from "../camp-gallery/img2.png"
import img3 from "../camp-gallery/img3.png"
import img4 from "../camp-gallery/img4.png"
import img5 from "../camp-gallery/img5.png"
import img6 from "../camp-gallery/img6.png"

const Gallery = () =>{
    return(
        <div className="gallery-card">
            <div className="gallery-container">
                <img src={img6} alt="gallery-img"/>
                <img src={img2} alt="gallery-img"/>
                <img src={img3} alt="gallery-img"/>
            </div>
            <div className="gallery-container">
                <img src={img4} alt="gallery-img"/>
                <img src={img5} alt="gallery-img"/>
                <img src={img1} alt="gallery-img"/>
            </div>
            
        </div>
    )
}

export default Gallery;