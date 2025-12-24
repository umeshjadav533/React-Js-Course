import React from 'react'
import useForm from './hooks/useForm'

const LoginForm = () => {
    const intialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log("Form Submitted: ", values);
    }
    const { values, handleChange, handleSubmit, resetForm } = useForm(intialValues, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} />
        <br /><br />

        <input type='password' name='password' placeholder='password' value={values.password} onChange={handleChange} />
        <br /><br />

        <button type='submit'>Submit</button>
        <button onClick={resetForm}>Reset</button>
    </form>
  )
}

export default LoginForm
