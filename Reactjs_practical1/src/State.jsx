import { useState } from "react";

function State() {
    const [count, setCount] = useState(0);
    //  let count = 0
    const incriment = ()=> {
        // count = count + 1;
        setCount(count + 1);
        console.log(count)
    
    }

    const decrement = ()=> {
        setCount(count -1)
    }

    const reset = ()=> {
        setCount(0);
    }
    

    return(
        <>
        <p>You Clicked {count} times</p>
       <button onClick={incriment}>incriment</button> <br /> <br />
       <button onClick={decrement}>decrement</button> <br /> <br />
       <button onClick={reset}>reset</button> <br /> <br />
        </>
    )

}

export default State;