import {useEffect, useRef, useState} from "react"
const Jinput = () => {
    const inputRef = useRef(null)
    const [name, setName] = useState("")
    const [firsts, setFirsts] = useState(null)
    const [first, setFirst] = useState("")
    
    const [names, setNames] = useState(null)
    const [pass, setPass] = useState(null)
    
    useEffect(()=> {
        inputRef.current.focus()
    },[])
    const handleMe = (event) => {
        setName(event.target.value)
        
         if(name.match("[A-Z]") && name.match("[a-z]") ) {
            setNames(false)
        }  
        else {
            setNames(true)
            
        }
      
      
    }
    const handleMes = (event) => {
        setFirst(event.target.value)
        
        if (first.match("[A-Z]") && first.match("[a-z]")) {
            setFirsts(false)
        }
        else {
            setFirsts(true)
        }
    }
  
    const inputValue = () => {
        if (names === false && firsts === false) {
              setPass(false)
        }

       
       
        else {
           setPass(true)
        }
     }
   return ( 
<div>FirstName:<input type="text" ref={inputRef} value={name} onChange={handleMe} className="input-1"></input>
<p>{names && <div className="error">its not valid</div>}</p>
<br></br>
LastName:<input type="text"  value={first} onChange={handleMes} className="input-1"></input>
<p>{firsts && <div className="error">its not valid</div>}</p>
<br></br>
<p>{pass && <div className="error">Input fields cant be blank</div>}</p>

<button onClick={inputValue}  className ="button-1">Sign-up</button>

        </div>
     );
}
 
export default Jinput;