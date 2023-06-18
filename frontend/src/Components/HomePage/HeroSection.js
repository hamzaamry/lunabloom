import React from 'react';
import '../Styles/HeroSection.css';
/*import '../App.css' ;*/
import imgHero1 from '../Assets/imgHero1.png';
import clouds from '../Assets/clouds.png' ;
import moon from '../Assets/moon.png' ;
import mountains from '../Assets/mountains.png' ;
import { Link } from 'react-router-dom';
 

const HeroSection = () => {
  return (
    <div className='hero-container'>

        <h1 className='primary-p'>
            Unleash your brand's potential with our AI-powered marketing strategy platform
        </h1>

        <p className='secondary-p'> 
        Our platform helps content creators and businesses of all sizes to harness the power of AI technology and data analytics to develop effective marketing strategies, grow their brands, and achieve their business goals Stay ahead of the competition and achieve your goals with us
        </p>
        
        <Link to='/JoinNow'>
          <button className='btn-hero-section' >
              Start Crafting Your Content
          </button>
        </Link>
        <div>
          <img className='imgHero1' src={imgHero1} alt="Hero Image" />
          <img className='clouds' src={clouds} alt="clouds" />
          <img className='moon' src={moon} alt="moon" />
          <img className='mountains' src={mountains} alt="mountains" />
          
        </div>
    </div>
  )
}

export default HeroSection