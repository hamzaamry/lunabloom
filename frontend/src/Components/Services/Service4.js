import React from 'react'
import '../Styles/Service.css' ;

import greenGirl from '../Assets/greenGirl.png';

const Service4 = () => {
  return (
    <div className='Service4-container'>
      <div className='Service4-description'>
      <h2 className='Service4-title'>
      Content types
      </h2>
      <p className='Service4-p'>
      With our content prediction service, you will discover the most engaging content kinds for your target audience. We evaluate data to determine the kinds of content that would best appeal to your target audience and help you increase engagement and conversions.
      </p>
      </div>
      <img className='greenGirl' src={greenGirl} alt="service4Image" />
    </div>
  )
}

export default Service4