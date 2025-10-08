import { useState } from "react";
function Form() {
    const [name, setName] = useState('');
    function handleChange(event) {
      setName(event.target.value);
    }
    return(
        <>
        <input type="text" onChange={handleChange} />
        <p>Hello {name}</p>
        </>
    )
}

export default Form;