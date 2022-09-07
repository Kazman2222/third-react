import { useState } from "react";

const useHall = () => {
    const [blog, setBlogs] = useState(0)
    const handleClick = () => {
        setBlogs(prevState => prevState + 1)
    }
  return[blog, handleClick]
}
 
export default useHall;