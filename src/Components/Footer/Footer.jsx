import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import Instagram_logo from '../assets/Instagram_logo.png'
import Pinterest_logo from '../assets/Pinterest_logo.png'
import Whatsapp_logo from '../assets/Whatsapp_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>CRICSTORE</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={Instagram_logo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Pinterest_logo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Whatsapp_logo} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer