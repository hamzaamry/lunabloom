import React from 'react'
import HeroSection from '../Components/HomePage/HeroSection'
import '../App.css'

import AboutUs from './AboutUs';
import Services from './Services';
import Footer from '../Components/Footer';
import AboveSrvc from '../Components/Services/AboveSrvc';



const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <AboveSrvc />
      <Footer />
    </>
  )
}

export default Home ;