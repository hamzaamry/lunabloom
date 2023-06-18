import React from 'react'
import '../Styles/Service.css' ;

import artguy from '../Assets/artguy.png';

const Service2 = () => {
  return (
    <div className='Service2-container'>
      <div className='Service2-description'>
      <h2 className='Service2-title'>
        Determine target audience
      </h2>
      <p className='Service2-p'>
        Find Your Perfect Audience: Based on demographics, hobbies, and online activity, we help you forecast your target audience.
      </p>
      </div>
      <img className='artguy' src={artguy} alt="service2Image" />
    </div>
  )
}

export default Service2