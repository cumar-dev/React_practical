import React, { useRef } from 'react'
import "./App.css"
const Direct_Dom_Access = () => {
    const cardRef = useRef(null);
    const toggleHighlight = ()=> {
        if(cardRef.current) {
            cardRef.current.classList.toggle('highlight');
        }
    }
  return (
    <>
    <div style={{textAlign: "center"}}>
        <div ref={cardRef} className="card">
            <h2>Interactive Card</h2>
            <p>Click the button to toggle the highlight</p>
        </div>
        <button onClick={toggleHighlight}>Toggle Highlight</button>
    </div>
    </>
  )
}

export default Direct_Dom_Access;