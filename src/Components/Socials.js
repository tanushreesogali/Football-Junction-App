import React from 'react';
import instagramIcon from './images/image 40.png';
import facebookIcon from './images/image 28.png';
import linkedinIcon from './images/image 31.png';
import youtubeIcon from './images/image 29.png';
import xIcon from './images/image 30.png';

export default function Socials() {
  const icons = [
    { src: instagramIcon, alt: 'Instagram' },
    { src: facebookIcon, alt: 'Facebook' },
    { src: linkedinIcon, alt: 'LinkedIn' },
    { src: youtubeIcon, alt: 'YouTube' },
    { src: xIcon, alt: 'X' },
  ];

  return (
    <div className="socials-column" id="sidebar">
      {icons.map((icon, index) => (
        <div key={index} className="social-icon-container">
          <img src={icon.src} alt={icon.alt} className="social-icon" />
        </div>
      ))}
    </div>
  );
}


