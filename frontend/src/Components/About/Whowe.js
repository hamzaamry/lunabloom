import React from 'react'
import whowe from '../Assets/whowe.png';
import '../Styles/Whowe.css'
const Whowe = () => {
  return (
    <div className='who-we-section' >
        <img className='who-we-img' src={whowe} alt="who-we-img"></img>
        <div className='who-are-we-word'>
            <h2>
                WHO ARE WE ?
            </h2>
        </div>
        <div className='about-description'>
            <p>
                LunaBloom is dedicated to assisting content creators and businesses in growing their brand and reaching their target audience. 
            </p>
            <p>
                We presume that every expressive endeavor deserves a chance to shine, and we're committed to providing the tools and resources necessary to do so.  
            </p>
            <p>
                Our platform can help you develop a winning digital marketing strategy that connects with your audience and drives results, irrespective of whether you're an artist, seller, writer, or entrepreneur.
            </p>
        </div>
    </div>
  )
}

export default Whowe
