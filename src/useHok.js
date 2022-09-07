import { useState } from "react"
const useHok = () => {
    const [count, setCount] = useState("block")
  
    const handleMe = () => {
        setCount("none")
    }
  
    return [count,handleMe]
}
 
export default useHok;