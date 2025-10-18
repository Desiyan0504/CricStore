import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import './App.css'
import Footer from './Components/Footer/Footer'
import Jersey_banner from './Components/assets/Jersey_banner.jpg'
import Equipments_banner from './Components/assets/Equipments_banner.jpg'


function App(){
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
        
        <Route path='/' element={<Shop/>}/>
        <Route path='/Jersey' element={<ShopCategory banner={Jersey_banner} category="Jersey"/>}/>
        <Route path='/Equipments' element={<ShopCategory banner={Equipments_banner} category="Equipments"/>}/>
      
        <Route path='/Product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
       
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
       
      </Routes>
      
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App