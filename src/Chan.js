
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useContext,useEffect,useRef, useState } from 'react'

import tomato from "./tomato.jpg"
import vegee from "./vegee.jpg"
import { Link } from 'react-router-dom'



export const cartCon = React.createContext()
export const MyCons = React.createContext()
export const MyConss = React.createContext()

const Chan = (props, event) => {
    const inputRef = useRef()
    const regRef = useRef()
   
    return ( 
        <div>
<div className='shop-div-1'>
<FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
<h4 className='tobi-store'>Tobi's Store</h4>
<Link to="/Solution" className="cart"><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></Link>
<button className='cart-many'>{props.number}</button>
</div>
<div className='shop-div-2'>

</div>
<div className='shop-div-3'>
    <h1 className='shop-h'>Our Products</h1>
<img src={tomato} className="img-cart"></img>
    <span className='shop-span'>vegetables</span>
    <br></br>
    <button    className="buttons-1" onClick={props.handleMe} ><FontAwesomeIcon icon={faShoppingCart}  ></FontAwesomeIcon></button>
    <button className="button-veg"><Link to="/NextPage">view in store</Link></button>
</div>
<div className='shop-div-8'>
<img src={vegee} className="img-carts"></img>
    <span className='shop-span'>sauce</span>
    <br></br>
    <button    className="buttons-1" onClick={props.handleMes} ><FontAwesomeIcon icon={faShoppingCart}  ></FontAwesomeIcon></button>
    <button className="button-veg">view in stores</button>
</div>
     </div>
     );
}
 
export default Chan;