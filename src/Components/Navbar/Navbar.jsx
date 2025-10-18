import React, { useContext ,useRef} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'

function Navbar(){

  
  //changed the state variable 
  const location=useLocation();
  const currentPath=location.pathname.split('/').filter(Boolean).pop() || 'shop';

  //changed the proops from 'shop' to currentPath
  const [menu,setMenu]=useState(currentPath);
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = ()=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>CRICSTORE</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Jersey")}}><Link style={{textDecoration:"none"}} to='/Jersey'>Jersey</Link>{menu==="Jersey"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Equipments")}}><Link style={{textDecoration:"none"}} to='/Equipments'>Equipments</Link>{menu==="Equipments"?<hr/>:<></>}</li>
        </ul> 
        <div className="nav-login-cart">
          
          {/*set an onclick to the button*/}

            <button onClick={()=>{setMenu("Login")}}><Link style={{textDecoration:"none"}} to='/Login'>Login</Link></button>
            <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar