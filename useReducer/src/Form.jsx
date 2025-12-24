import { useReducer } from 'react'

const Form = () => {
    const reducer = (state, action) => {
        return { 
            ...state, 
            [action.name]: action.value
        }
    }
    const [formData, dispatch] = useReducer(reducer, {
        username: "",
        email: ""
    });

    const handleChange = (e) => {
        dispatch({
            name: e.target.name,
            value: e.target.value
        })
    }

  return (
    <form>
        <input 
            type='text' 
            name='username' 
            placeholder='User name' 
            value={formData.username}
            onChange={handleChange}
        />
        <input 
            type='email' 
            name='email' 
            placeholder='Email' 
            value={formData.email} 
            onChange={handleChange}
        />

        <p>username: {formData.username}</p>
        <p>email: {formData.email}</p>
    </form>
  )
}

export default Form
