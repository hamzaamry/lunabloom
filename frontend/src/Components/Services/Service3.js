import React from 'react'
import '../Styles/Service.css' ;

import blusky from '../Assets/blusky.png';

const Service3 = () => {
  return (
    <div className='Service3-container'>
      <div className='Service3-description'>
      <h2 className='Service3-title'>
        Platform selection
      </h2>
      <p className='Service3-p'>
        Discover the best platform for your brand. Our platform identification service assists you in determining which social media channels are best suited to your target demographic and brand messaging.      
      </p>
      </div>
      <img className='blusky' src={blusky} alt="service3Image" />
    </div>
  )
}

export default Service3