import React from 'react'
import Wait from '../Components/About/Wait';
import Whowe from '../Components/About/Whowe';
import '../Components/Styles/About.css';

const AboutUs = () => {
  return (
    <section className='about-container'>
      <Wait />
      <Whowe />
    </section>
  )
}

export default AboutUs