import useHok from "./useHok";

const Render = () => {
    const [count, counts, handleMe, handleMes] = useHok()
    return ( 
        <div>
            <p>{count}</p>
            <h3>{counts}</h3>
            <button onClick={handleMe}>passed left</button>
            <button onClick={handleMes}>passed rigth</button>
        </div>
     );
}
 
export default Render;