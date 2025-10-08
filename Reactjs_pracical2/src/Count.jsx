import { useEffect, useState } from "react"

function Count() {
    const [count, setCount] = useState(0);
    const increase = ()=> {
        setCount(count + 1);
    }
    const decrease = ()=> {
        setCount(count - 1);
    }

    const Reset = ()=> {
        setCount(0);
    }

    useEffect(()=> {
     document.title = `clicked ${count} times`
    })
    return(
    <>
    <div>
        <p>You clicked {count} times</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={Reset}>Reset</button>
    </div>
    </>
    )
}

export default Count;