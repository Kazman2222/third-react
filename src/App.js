
import React, { useState, useRef, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './App.css';
import Go from './Go';
import Jinput from './Jinput';
import Gos from './Gos';
import Goss from './Goss';
import Set from './Set';
import Alos from './Alos';
import Memo from './Memo';
import Ref from './Ref';
import Boj from './Boj';
import Loops from './Loops';
import Render from './Renders';
import Project from './Project';
import Obje from './Obje';
import Arrs from './Arrs';
import Chan from './Chan';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Solution from './Solution';
import NextPage from './NextPage';
import Coun from './Coun';
import Fetch from './Fetch';
import { cartCon } from './Chan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import tomato from "./tomato.jpg"







export const MyCons = React.createContext()
export const MyConss = React.createContext()

function App() {
 // const inputRef = useRef()
//const [count, setCount] = useState("")
//const [counts, setCounts] = useState("none")
//const handleMes = (event) => {
//  if(event.target === inputRef.current) {
 //   setCount("block")
//  } else {
 //   setCount("none")
 // }
//}
const [count, setCount] = useState("none")
const [counts, setCounts] = useState("none")
const [number, setNumber] = useState(0)
const [numbers, setNumbers] = useState(0)
const [numberss, setNumberss] = useState(0)

const [name, setName] = useState(null)



//const [cart, setCart] = useState("YOUR CART ITEM IS EMPTY PLEASE ADD  TO YOUR CARTS ITEM")
const handleMe = () => {
  setCount("block")
  setNumber(prevState => prevState + 1)
  setNumbers(prevsState => prevsState + 1)
 setName("luigis")
 // setCart("YOUR CART ITEMS")
}
const handleUs = () => {
 setCount("none")
 setNumber(prevState => prevState - numbers)
 setNumbers(prevsState => prevsState - numbers)
// setCart("YOUR CART ITEM IS EMPTY PLEASE ADD  TO YOUR CARTS ITEM")
}
const handleMes= () => {
setCounts("block")
setName("luigi")
setNumber(prevState => prevState + 1)
setNumberss(prevssState => prevssState + 1)

//setCart("YOUR CART ITEMS")
}
const handleMess = () => {
  setCounts("none")
  setNumber(prevState => prevState - numberss)
  setNumberss(prevssState => prevssState - numberss)
 // setCart("YOUR CART ITEM IS EMPTY PLEASE ADD  TO YOUR CARTS ITEM")
  }
  const deductFu = () => {
    setNumbers(prevssState => prevssState - 1)
    setNumber(number - 1)
  }
  const increFu = () => {
    setNumbers(prevssState => prevssState + 1)
    setNumber(number + 1)
  }
  const deductsFu = () => {
    setNumberss(prevssState => prevssState - 1)
    setNumber(number - 1)
  }
  const incresFu = () => {
    setNumberss(prevssState => prevssState + 1)
    setNumber(number + 1)
  }
  
  
 
  return (
    
    
    <Router>
    <div className="App">
    
   
<Switch>
  <Route exact path="/">
  <Chan count={count} handleMe={handleMe} counts={counts} handleMes={handleMes} number={number}></Chan>
   
  </Route>
  <Route path="/Solution">
  <MyConss.Provider >
   <MyCons.Provider >
    
    <Solution count={count} handleUs={handleUs}  counts={counts} handleMes={handleMes} handleMess={handleMess} number={number} numbers={numbers} numberss={numberss} deductFu={deductFu} increFu={increFu} incresFu={incresFu} deductsFu={deductsFu} />
    </MyCons.Provider>
    </MyConss.Provider>
   
  </Route>
  <Route path="/NextPage">
    <NextPage number ={number}></NextPage>
  </Route>
  
</Switch>
{/*<Project></Project>
 <Arrs></Arrs>
  <Obje></Obje>
      
      <ChannelCons.Provider value={"kazeem"}>
      <Chan></Chan>
      <Alos></Alos>
      <Render></Render>
      <Ref></Ref>
      <Loops></Loops>
      <Boj></Boj>
      <Jinput></Jinput>
      <Go render={(count, handleMe) => <Gos count={count} handleMe={handleMe}></Gos>}></Go>
      <Go render={(count, handleMe) => <Goss count={count} handleMe={handleMe}></Goss>}></Go>
      
      </ChannelCons.Provider>
      <Set></Set>
  <Memo></Memo> */}
      
   
     
    </div>
    </Router>
  );
}

export default App;
