import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useContext,useEffect,useRef, useState } from 'react'

import tomato from "./tomato.jpg"
import vegee from "./vegee.jpg"
import { Link } from 'react-router-dom'
const NextPage = (props) => {
    return ( 
        <div>
        <div className='shop-div-1'>
        <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
        <h4 className='tobi-store'>Tobi's Store</h4>
        <Link to="/Solution" className="cart"><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></Link>
        <button className='cart-many'>{props.number}</button>
        </div>
        </div> 
     );
}
 
export default NextPage;