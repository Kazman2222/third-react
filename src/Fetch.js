import { useEffect, useState } from "react";

const Fetch = () => {
    const [blog, setBlogs] = useState("")
    const [blogs, setBlogss] = useState(true)
    useEffect(()=>{
        setInterval(()=>{
            fetch("https://api.adviceslip.com/advice")
            .then(res =>{
                if(!res.ok) {
                    throw Error ("sorry the data can't be fetched now")
                }
              return  res.json()
            })
            .then(data=>{
setBlogs(data.slip.advice)
setBlogss(false)
            })
            .catch(err => {
              setBlogss(err.message)  
            })
        }, 1000)
    })
    return ( 
        <div>
<p>{blog}</p>
{blogs}
        </div>
     );
}
 
export default Fetch;