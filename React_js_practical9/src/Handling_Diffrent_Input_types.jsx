import React, { useState } from 'react'

const Handling_Diffrent_Input_types = () => {
    const [checked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const handleSubmit = (event) => {
     event.preventDefault();
     if(!checked) {
        alert("please check the check box");
        return;
     }
     console.log(checked);
     if(selectedOption == "") {
        alert("please select your option");
        return;
     }
     console.log(selectedOption);
    }
    const handleChangeCheckBox = (e)=> {
     setIsChecked(e.target.checked);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>CheckBox</label>
    <input type="checkbox" checked={checked} onChange={handleChangeCheckBox} />
    <select value={selectedOption} onChange={(e)=> setSelectedOption(e.target.value)}>
        <option value="Select Option">Select Option</option>
        <option value="IT">IT</option>
        <option value="Cloud">Cloud</option>
        <option value="engineering">engineering</option>
    </select>
    <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default Handling_Diffrent_Input_types;