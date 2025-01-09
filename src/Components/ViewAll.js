import React from 'react';
import '../App.css';
import RightArrow from './RightArrow';

export default function ViewAll(){
  return (
    <div className='view-all-container'>
      <button className='view-all-button'>
        <span className='view-all-text'>VIEW ALL</span>
        <RightArrow className="view-all-icon" />
      </button>
    </div>
  );
};
