import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_rating from '../assets/star_rating.png'
import star_dull from '../assets/star_dull.png'
import RelatedProducts from '../RelatedProducts/RelatedProducts'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {

    

    const {product} =props;
    const {addToCart} =useContext(ShopContext);

  return (
    
    <div className="productdisplay">
        <div className='productdisplay-left'>
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
        
            <div className="productdisplay-img">
                    <img className="productdisplay-main-img"src={product.image} alt="" />
            </div>
         </div>
        <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_rating} alt="" />
                    <img src={star_rating} alt="" />
                    <img src={star_rating} alt="" />
                    <img src={star_rating} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(182)</p>

                </div>
                <div className="productdisplay-right-prices">
                  <div className="productdisplay-right-prices-old">${product.old_price}</div>
                  <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                  {product.description}
                </div>
                <div className="productdisplay-right-size">{product.category==="Jersey"?
                  (<>
                  <h1>Select Size</h1>
                  <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                  </div>
                  </>):(<>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                    </div>
                    </>
                  )}
                </div>
                <div className="displayproduct-buttons">
                  <button onClick={()=>{addToCart(product.id)}} id="cart">ADD TO CART</button>
                  <button id="buy">BUY NOW</button>
                </div>
                
                
        </div>
        
    </div>
   
    
  )
}

export default ProductDisplay