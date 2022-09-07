import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars,  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useContext,useEffect,useRef, useState } from 'react'
import App, {  MyCons, MyConss } from './App'
import tomato from "./tomato.jpg"
import vegee from "./vegee.jpg"

import { Link } from 'react-router-dom'



const Solution = (props) => {
  const inputRef = useRef()
  const regRef = useRef()
  const regsRef = useRef()
  
 // const Chan = useContext(MyCons)
//  const Chans = useContext(MyConss)
 
 // const [count, setCount] =  useState("")
 // const handleMe = () => {
 //   setCount(Chans)
   
   // inputRef.current.style.display = "none"
//  }
//  const handleUs = (event) => {

 //  setCount(Chan)
 // }
  
   const {count,counts,handleMess, handleUs, cart, number, numbers, numberss, deductFu, increFu, deductsFu, incresFu} = props
   const [carts, setCarts] = useState(cart)
   const [me, setMe] = useState()
   const [mes, setMes] = useState()
  
 useEffect(()=> {
  setMe(numbers * 300)
 
 
 }, [numbers])
 useEffect(()=> {
  setMes(numberss * 700)
 
 
 }, [numberss])
   let mess = ""
   if(numbers !== 0 && numberss !== 0) {
 mess =   <div>YOUR CART ITEMS ARE</div>
   } else if (numbers !== 0 && numberss === 0)  {
    mess =   <div>YOUR CART ITEMS ARE</div>
   }else if (numberss !== 0 && numbers === 0)  {
    mess =   <div>YOUR CART ITEMS ARE</div>
   }
   else if (numbers === 0 && numberss === 0)  {
    mess =   <div>YOUR CART ITEM IS EMPTY</div>
   }
   else {
  
   }
 

   
    return ( 
        <div >
          <div className='shop-div-1'>
<FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
<h4 className='tobi-store'>Tobi's Store</h4>
<Link to="/Solution" className="cart"><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></Link>
<button className='cart-many'>{number}</button>
</div> 
<div>
  <h2 className='cart-h-2'>{mess}</h2>
</div>
<div style={{display: count}}  ref={inputRef} className="shop-div-5">
<img src={tomato} className="img-cart"></img>
<h5 className='fresh'>FRESH TOMATO</h5>
<p className='fresh-p'> <del>N</del>300 * {numbers} quantities = <span><del>N</del>{me}</span></p>
<div className='Tomato'>
<button onClick={deductFu} ref={regsRef} className="solution-button">-</button>
    <button  onClick={handleUs}  ref={inputRef} className="solution-buttons" >Remove from the cart item</button>
    <button onClick={increFu} ref={regsRef} className="solution-buttonss">+</button>
</div>

   </div>
   <br></br>
   <div style={{display: counts}} className="shop-div-5" >
<img src={vegee} className="img-cart"></img>
<h5 className='fresh'>FRESH SAUCE</h5>
<p className='fresh-p'> <del>N</del>700 * {numberss} quantities = <span><del>N</del>{mes}</span></p>
<div className='Tomato'>
<button onClick={deductsFu} className="solution-button">-</button>
    <button  onClick={handleMess}  ref={regRef} className="solution-buttons">Remove from the cart item</button>
    <button onClick={incresFu} ref={regsRef} className="solution-buttonss">+</button>
</div>

   </div>
 </div>
     );
}
 
export default Solution;