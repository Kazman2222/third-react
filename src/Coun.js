import useHall from "./useHall";

const Coun = () => {
    const [blog, handleClick] = useHall()
    return ( 
        <div>
            <p>{blog}</p>
            <button onClick={handleClick}>increment</button>
        </div>
     );
}
 
export default Coun;