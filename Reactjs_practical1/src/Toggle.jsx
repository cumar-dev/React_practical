import { useState } from "react";

function Toggle() {
    const [isVisible, setIsVisible] = useState(true);
const toggle = ()=> {
    setIsVisible(!isVisible);
}
return(
    <>
    <button onClick={toggle}>{isVisible ? "Show" : "Hide"} Message</button>
    {isVisible &&  <p>This is toggleable Message</p>}
   
    </>
)
}

export default Toggle;