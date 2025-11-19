import { useRef, useEffect, useState } from "react"
import React from 'react'

const Tracking_Previous_State = () => {
    const [count, setCount] = useState(0);
    const peviousCountRef = useRef();
    useEffect(()=> {
        peviousCountRef.current = count;
    }, [count])
  return (
    <>
    <h2>Current: {count}</h2>
    <h2>Previous: {peviousCountRef.current}</h2>
    <button onClick={()=> setCount(count + 1)}>incriment</button>
    </>
  )
}

export default Tracking_Previous_State;