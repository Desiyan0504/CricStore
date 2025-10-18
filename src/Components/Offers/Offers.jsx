import React from 'react'
import './Offers.css'
import Exclusive_img from '../assets/Exclusive_img.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>GRAB QUICK, OFFER ENDS SOON</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={Exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers