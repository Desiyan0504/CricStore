import React from 'react'
import './Breadcrum.css'
import arrow_icon1 from '../assets/arrow_icon1.png'


const Breadcrum = (props) => {
    const {product} =props;
    
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon1} alt="" /> SHOP <img src={arrow_icon1} alt="" /> {product.category} <img src={arrow_icon1} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum