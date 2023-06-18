import React from 'react'
import '../Styles/Service.css' ;

import violet from '../Assets/violet.png';

const Service1 = () => {
  return (
    <div className='Service1-container'>
      <div className='Service1-description'>
      <h2 className='Service1-title'>
        Predict current/upcoming trends
      </h2>
      <p className='Service1-p'>
        By analyzing data and spotting upcoming patterns, our trend prediction service helps you remain ahead of the curve. 

        Our AI-powered algorithms employ cutting-edge technology to give accurate and timely forecasts, allowing you to make educated decisions and remain ahead of the competition.
      </p>
      </div>
      <img className='violet' src={violet} alt="illustration" />
    </div>
  )
}

export default Service1