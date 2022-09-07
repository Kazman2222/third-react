import { useMemo, useState } from "react";

const Memo = () => {
    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState(0)
    const handleMe = () => {
        setCount(count + 1)
    }
    const handleMes = () => {
        setCounts(counts + 1)
    }
   
    const isEven =  useMemo( () => {
        let i = 0
        while(i < 2000000000) i++
        return count
    }, [count])
    return ( 
        <div>
<p>{count}</p>
<p>{counts}</p>
<p>{isEven}</p>
<button onClick={handleMe} style={{}}>usememo</button>
<button onClick={handleMes}>usememos</button>
        </div>
     );
}
 
export default Memo;