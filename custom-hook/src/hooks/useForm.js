import { useState } from "react";

const useForm = (intialValues, callback) => {
    const [values, setValues] = useState(intialValues);

    // Handle input data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(values);
    }

    // Reset Form
    const resetForm = () => setValues(intialValues);

    return { values, handleChange, handleSubmit, resetForm }
}

export default useForm;