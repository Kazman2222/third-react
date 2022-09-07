

const Gos = (props) => {
    const {count, handleMe} = props
    return ( 
      
        <div>
              
           
<p>{count}</p>
<button onClick={handleMe}>click</button>

</div>

     );
}
 
export default Gos;