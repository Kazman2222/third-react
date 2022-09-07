import { useEffect, useRef, useState } from "react";

const Arrs = () => {
    
const [count, setCount] = useState("")
const [counts, setCounts] = useState()
const [multiply, setMultiply] = useState()
const [multiplys, setMultiplys] = useState()
const [result, setResult] = useState()
const [results, setResults] = useState()
const inputRef = useRef()
const inputRefs = useRef()
useEffect(()=> {
  inputRef.current.blur()
})
const handleMe0 = () => {
  if(count === "") {
  inputRef.current.value += 0
  } else {
    inputRefs.current.value += 0
  }
 
}
const handleMe1 = () => {
  if(count === "") {
  inputRef.current.value += 1
  } else {
    inputRefs.current.value += 1
  }
 
}
const handleMe2 = () => {
  if(count === "") {
  inputRef.current.value += 2
  } else {
    inputRefs.current.value += 2
  }
 
}
const handleMe3 = () => {
  if(count === "") {
  inputRef.current.value += 3
  } else {
    inputRefs.current.value += 3
  }
 
}
const handleMe4 = () => {
  if(count === "") {
  inputRef.current.value += 4
  } else {
    inputRefs.current.value += 4
  }
 
}
const handleMe5 = () => {
  if(count === "") {
  inputRef.current.value += 5
  } else {
    inputRefs.current.value += 5
  }
 
}
const handleMe6 = () => {
  if(count === "") {
  inputRef.current.value += 6
  } else {
    inputRefs.current.value += 6
  }
 
}
const handleMe7 = () => {
  if(count === "") {
  inputRef.current.value += 7
  } else {
    inputRefs.current.value += 7
  }
 
}
const handleMe8 = () => {
  if(count === "") {
  inputRef.current.value += 8
  } else {
    inputRefs.current.value += 8
  }
 
}
const handleMe9 = () => {
  if(count === "") {
  inputRef.current.value += 9
  } else {
    inputRefs.current.value +=9
  }
}
const handleMe10 = () => {
  if(count === "") {
  inputRef.current.value += "."
  } else {
    inputRefs.current.value += "."
  }
}
const setFu = () => {
setCount("*")
}
const setFus = () => {
  setCount("+")
  }
  const setFunc = () => {
    setCount("-")
    }
    const setFunct = () => {
      setCount("/")
      }
const resFU = () => {
  if(count === "*") {
    setMultiply(inputRef.current.value * inputRefs.current.value)
  }
  if(count === "-") {
    setMultiply(inputRef.current.value - inputRefs.current.value)
  }
  if(count === "+") {
    setMultiply(Number(inputRef.current.value) + Number(inputRefs.current.value))
  }
  if(count === "/") {
    setMultiply(inputRef.current.value / inputRefs.current.value)
  }
}
const clearFun = () => {
  setCount("")
  if(inputRefs.current.value !== "") {
inputRefs.current.value = inputRefs.current.value.slice(0, -1)
  } else {
    inputRef.current.value = inputRef.current.value.slice(0, -1)
  }
}
const overFun = () => {
  setCount("")
  setMultiply("")
  inputRef.current.value = ""
  inputRefs.current.value = ""
}


    return ( 
       <div>
        <input type="text" value={results} ref={inputRef} className="input-2"></input>
        <input type="text" value={count} className="input-3"></input>
        <input type="text" ref={inputRefs} className="input-4"></input>
        <p className="result">{multiply}</p>
        <p>{result}</p>
        <div className="button-section">
          <div className="button-container">
          <button onClick={handleMe7}>7</button>
        <button onClick={handleMe8}>8</button>
        <button onClick={handleMe9}>9</button>
        <button onClick={clearFun}>DEL</button>
          </div>
          <div className="button-container">
          <button onClick={handleMe4}>4</button>
        <button onClick={handleMe5}>5</button>
        <button onClick={handleMe6}>6</button>
        <button onClick={setFus}>+</button>
          </div>
        <div className="button-container">
        <button onClick={handleMe1}>1</button>
        <button onClick={handleMe2}>2</button>
        <button onClick={handleMe3}>3</button>
        <button onClick={setFunc}>-</button>
       
        </div>
       <div className="button-container">
       <button onClick={handleMe10}>.</button>
        <button onClick={handleMe0}>0</button>
        <button onClick={setFu}>*</button>
        <button onClick={setFunct}>/</button>
       </div>
     <div className="button-container">
      <button className="reset-button" onClick={overFun}>RESET</button>
        <button className="result-button" onClick={resFU}>=</button>
        </div>
       
        </div>
        
        
         
       </div>
     );
}
 
export default Arrs;