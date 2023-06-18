import React from 'react'
import HeroService from '../Components/Services/HeroService' 
import Service1 from '../Components/Services/Service1' 
import Service2 from '../Components/Services/Service2' 
import Service3 from '../Components/Services/Service3' 
import Service4 from '../Components/Services/Service4' 

import '../Components/Styles/Service.css' ;



const Services = () => {
  return (
    <section className="Services-container">
      <div className="HeroService-container">
        <HeroService />
      </div>
      <section className="Services">
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        </section>
    </section>   
  )
}

export default Services