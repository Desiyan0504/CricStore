import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import hero_final from '../assets/hero_final.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                
                <div className="hero-hand-icon">
                    <p>Hey!</p>
                    <img src={hand_icon} alt="" />
                    
                </div>
                    <p>Gear Up,</p>
                    <p>For Greatness</p>
                
                <div className="hero-latest-btn">
                    <div>
                        Latest Collections
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_final} alt="" />
        </div>
    </div>
  )
}

export default Hero