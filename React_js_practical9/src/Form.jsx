import React, { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState("");
    const handleSubmit = (event)=> {
      event.preventDefault();
      console.log("form submission:", input);
      alert(`Submitted: ${input}`);
      setInput("");
    }
  return (
    <>
    <h1>Form Submission</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Form;