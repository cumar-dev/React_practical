import { useEffect, useState } from "react";

function Timer() {
    const [time , setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(()=> {
        let TimerId;
        if(isRunning) {
        TimerId = setInterval(()=> {
        // setTime(time + 1);
        setTime((prev)=> prev + 1);
        }, 1000);
        }
       return()=> clearInterval(TimerId);
    },[isRunning]);
    const handleStart = ()=> {
    setIsRunning(true);
    }

    const handleStop = ()=> {
        setIsRunning(false);
    }
    const handleReset = ()=> {
        setIsRunning(false);
        setTime(0);
    }
    return(
        <>
        <div>
            <h2>Stop Watch in to {time} Seconds</h2>
            <button disabled={isRunning} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}

export default Timer;