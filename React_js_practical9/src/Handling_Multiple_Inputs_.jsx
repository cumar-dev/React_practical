import React, { useState } from 'react'

const Handling_Multiple_Inputs_ = () => {
    const [formData, setFormData] = useState ({
        username: "",
        email: "",
        password: "",
        checkbox: false,
        country: ""
    })
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(formData);
      setFormData({  username: "", email: "", password: "", checkbox: "", country: ""})
    }
    const handleChange = (e)=> {
     const {name, value, type, checked} = e.target;
     setFormData(previousData => ({...previousData, [name]: type === "checkbox" ? checked : value}));
    }
  return (
    <>
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='enter your username' value={formData.username} onChange={handleChange} /> <br />
        <input type="email" name='email' placeholder='enter your email' value={formData.email} onChange={handleChange} /> <br />
        <input type="password" name='password' placeholder='enter your password' value={formData.previousData} onChange={handleChange} /> <br />
        <input type="checkbox" name='checkbox' placeholder='select' checked={formData.checkbox} onChange={handleChange} /> <br />
        <select name="country" value={formData.country} onChange={handleChange}>
            <option value="select your country">select your country</option>
            <option value="Somalia">Somalia</option>
            <option value="Kenya">Kenya</option>
            <option value="ethopia">ethopia</option>
        </select>
        <button type='submit'>Submit</button>
    </form>
    </>
    </>
  )
}

export default Handling_Multiple_Inputs_