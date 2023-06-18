import React from 'react'
import '../Styles/AboveSrvc.css' 
import { Link } from 'react-router-dom';



const AboveSrvc = () => {
  return (
    <div className='AboveSrvc-container'>
          

        <h1 className='AboveSrvc-title'>
            Don't think twice!
        </h1>
        <p className='AboveSrvc-p'>
            Revolutionize Your Marketing with Our AI-Driven Platform.
        </p>
        <Link to='/JoinNow'>
          <button className='AboveSrvc-btn'>Sign up now !</button>
        </Link>
    </div>
  )
}

export default AboveSrvc