import React, { useState } from 'react'

const Handling_Multiple_Inputs = () => {
    const [formData, setFormData] = useState({
       userName: "",
        password: "",
        email: "",
        message: ""
    })

      const [submittedData, setSubmittedData] = useState([]);
    const handleChange = (e)=> {
   const  {name, value} = e.target;
   setFormData((previousData)=> ({...previousData, [name]: value}));
   
    }
    const handleSubmit = (event)=> {
     event.preventDefault();
     setSubmittedData(previous=> [...previous, formData]);
     console.log(formData);
     setFormData({
        userName: "",
        password: "",
        email: "",
        message: ""
     })
     }
  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
     <input type="text" name='userName' value={formData.userName} placeholder='Enter your username' onChange={handleChange} /> <br />
     <input type="number" name='password' value={formData.password} placeholder='enter your password' onChange={handleChange} /> <br />
     <input type="email" name='email' value={formData.email} placeholder='enter your email' onChange={handleChange} /> <br />
     <textarea name="message" value={formData.message} onChange={handleChange}>message</textarea> <br />
     <button type='submit'>Submit</button>
    </form>
    {submittedData.length > 0 ? (
          <ul>
             {submittedData.map((form, index) => (
              <li key={index} style={{  border: "1px solid gray", padding: "10px", marginTop: "10px", listStyle: "none" }}>
                 <h3>📋 Submitted Data:</h3>
                 <p><strong>Username:</strong> {form.userName}</p>
                <p><strong>Password:</strong> {form.password}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Message:</strong> {form.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No form submitted yet</h3>
        )}
      </div>
   </>
    
  )
}

export default Handling_Multiple_Inputs;