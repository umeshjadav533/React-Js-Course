import React, { useState } from "react";

const AdvancedForm = () => {
    const [formData, setFormData] = useState({
        gender: "",
        country: "India",
        agree: false
    });

    const handleSubmit = (e) => {
         e.preventDefault();
        console.log(formData);
    }

    const handleInputField = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prev) => ({
            ...prev, 
            [name] : type === "checkbox" ? checked : value
        }))
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form with Checkbox, Radio & Select</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleInputField}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleInputField}
        />
        Female
      </label>
      <br />

      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleInputField}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="agree"
          value={formData.agree}
          onChange={handleInputField}
        />
        I agree to terms and conditions
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
