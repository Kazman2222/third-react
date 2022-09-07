import { useState } from "react";

const Obje = () => {
    const [count, setCount] = useState({firstName: "" , lastName: ""})
    const handleMe = (event) => {
        setCount({
      ...count, firstName: event.target.value     
        })
    }
    const handleMes = (event) => {
        setCount({
            ...count, lastName: event.target.value     
        })
    }
    return ( 
        <div>
            <input type="text" value={count.firstName} onChange={handleMe}></input>
            <input type="text" value={count.lastName} onChange={handleMes}></input>
            <p>{count.firstName}</p>
            <p>{count.lastName}</p>
        </div>
     );
}
 
export default Obje;