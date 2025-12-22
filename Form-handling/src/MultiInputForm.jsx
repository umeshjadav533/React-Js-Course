import React, { useState } from 'react'

const MultiInputForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const handleSubmit = (e) => {
         e.preventDefault();
        console.log(formData);
    }

    const handleInputField = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, 
            [name]: value
        }))
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Multiple Input Form</h2>

      <input 
        name="name" 
        type="text" 
        placeholder="Name" 
        value={formData.name}
        onChange={handleInputField}
      />
      <br />

      <input 
        name="email" 
        type="email" 
        placeholder="Email" 
        value={formData.email}
        onChange={handleInputField}
      />
      <br />

      <input 
        name="age" 
        type="number" 
        placeholder="Age"
        value={formData.age}
        onChange={handleInputField}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default MultiInputForm
