import { useEffect, useState } from "react";

function WindowResize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(()=> {
    
    const handleResize = ()=> {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return()=> {
        window.removeEventListener('resize', handleResize);
    }
    },[])
    return(
        <>
        <p>Window Width: {width} px</p>
        <p>windows Height: {height} px </p>
        </>
    )
}

export default WindowResize;