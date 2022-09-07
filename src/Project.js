import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useRef, useState } from "react";

const Project = () => {
    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState(0)
    const inputRef = useRef()
    const handleMe =() => {
        setCount(prevState => prevState + 1)
        setCounts(0)
    }
  //  useEffect(()=> {
//  inputRef.current = setInterval(()=>{
//setCounts(prevState => prevState + 1)
      //  }, 1000)
      //  return () => {
          //
            clearInterval(inputRef.current)
      //  }
  //  }, [])
   let message = ""
   if(count === 5) {
    message = <div>hellos</div>
   }
 else if (count === 10) {
    message = <div>yoos</div>
   }
 else if(count === 14) {
    setCount(0)
 }
    else {
    message = <div>hiis</div>
   }
    return ( 
        <div>
            <p>{count}</p>
            <p>{counts}</p>
            <p>{message}</p>
            <p>hello</p>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="yo"></FontAwesomeIcon>
<FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
     <button onClick={handleMe}>right</button>
     <button onClick={()=> clearInterval(inputRef.current)}>Clear interval</button>
     
        
        </div>
     );
}
 
export default Project;