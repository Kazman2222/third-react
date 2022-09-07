import { useEffect, useRef } from "react";

const Ref = () => {
    const inputRef  = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    return ( 
     <input ref={inputRef} type="text"></input>   
     );
}
 
export default Ref;