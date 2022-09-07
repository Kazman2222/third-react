import { useEffect, useRef, useState } from "react";

const Set = () => {
    const [count, setCount] = useState(0)
    const inputRef = useRef()
    
    useEffect(()=> {
        inputRef.current = setInterval(()=> {
            setCount(prevState => prevState + 1)
        }, 1000)
        return () => {
            clearInterval(inputRef.current)
        }
    }, [])
    return ( 
        <div>
<span>{count}</span>
<button onClick={()=> clearInterval(inputRef.current)}>clickssss</button>
</div>
     );
}
 
export default Set;