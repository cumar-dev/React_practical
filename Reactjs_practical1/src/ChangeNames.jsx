import { useState } from "react";
function ChangeNames() {
    const [name, setName] = useState("");
    const handleChange = (event)=> {
     setName(event.target.value);
    }
    const handleSubmit = ()=> {
        event.preventDefault();
        alert(`your name is ${name}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                 <input type="text" value={name} onChange={handleChange} /> <br />
            </label>
           <button type="submit">Submit</button>
           <p>Your name is: {name}</p>
        </form>
        </>
    )
}

export default ChangeNames;