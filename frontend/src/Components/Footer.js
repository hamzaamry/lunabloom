import React from 'react'
import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <h3>LUNABLOOM</h3>
        <p>Unleash your brand's potential with our AI-powered marketing strategy platform.</p>
      </div>
      <div className="right">
        <ul>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer