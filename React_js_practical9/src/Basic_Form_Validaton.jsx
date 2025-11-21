import React, { useState } from 'react'
import "./App.css"
const Basic_Form_Validaton = () => {
    const [formData, setFormData] = useState ({
     username: "",
     email: "",
     password: ""
    })
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState ("");
    const validateForm = () => {
        const errors = {};
        if(formData.username.trim() === "") {
            errors.username = "username is required";
        }
        if(formData.email.trim() === "") {
            errors.email = "email is required";
        }
        if (formData.password.trim() === "") {
    errors.password = "Password is required";
}
        return errors;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // validateForm();
        const validationErrors = validateForm();
        if(Object.keys(validationErrors).length === 0) {
            console.log("form submitted successfully");
            setFormData({username: "", email: "", password: ""});
            setErrors({});
            setSuccess("Form submitted successfully! 🎉");
        }else {
            setErrors(validationErrors);
        }
        console.log(formData);
        
    }
    const handleChange = (e)=> {
    const {name, value} = e.target;
    setFormData(previousData => ({...previousData, [name] : value}))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input className='input' type="text" name='username' placeholder='username' value={formData.username} onChange={handleChange} /> <br />
        {
            errors.username  && <p className='username'>{errors.username}</p>
        }
        <input className='input' type="email" name='email' placeholder='email' value={formData.email} onChange={handleChange} /> <br />
        {
            errors.email && <p className='email'>{errors.email}</p>
        }
        <input className='input' type="password" name='password' placeholder='password' value={formData.password} onChange={handleChange} /> <br />
        {
            errors.password && <p className='password'>{errors.password}</p>
        }
        <button className='btn' type='submit'>Submit</button>
        {success && <p className="success">{success}</p>}
    </form>

    </>
  )
}

export default Basic_Form_Validaton;