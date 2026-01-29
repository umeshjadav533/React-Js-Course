import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Form = () => {
    // const { register, handleSubmit, control, formState } = useForm();
    const { register, handleSubmit, control, formState } = useForm({
        // defaultValues: {
        //     name: "umesh jadav",
        //     email: "",
        //     age: 18
        // }
        defaultValues: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            return {
                name: data.name,
                email: data.email,
                age: 18,
                social: {
                    facebook: "",
                    twitter: ""
                }
            }
        }
    });
    const { errors } = formState;
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form action='' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label><br />
                <input type='text' id='name' {
                    ...register("name", {
                        required: "Name is required"
                    })} />
                <br /><br />
                {errors.name && <p>{errors.name?.message}</p>}
                <label htmlFor='email'>Email</label><br />
                <input type='email' id='email' {
                    ...register("email",{
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        },
                        // validate: (value) => {
                        //     return (
                        //         value !== "adminExample.com" || "Enter a diffrenet email address"
                        //     )
                        // }
                        validate: {
                            notAdminEmail: (value) => {
                                return (
                                    value !== "adminExample.com" || "Enter a diffrenet email address"
                                ) 
                            },
                            notBlackListedEmail: (value) => {
                                return (
                                    !value.endsWith("@blacklisted.com") || "This domain is not allowed"
                                )
                            }
                        }
                    })} />
                <br /><br />
                {errors.email && <p>{errors.email?.message}</p>}
                <label htmlFor='age'>Age</label><br />
                <input type='number' id='age' {
                    ...register("age",{
                        valueAsNumber: true,
                        required: "Age is required",
                        min: {
                            value: 18,
                            message: "Age must be at least 18"
                        },
                        max: {
                            value: 25,
                            message: "Age must be at most 25"
                        }
                    })} />
                <br /><br />
                {errors.age && <p>{errors.age?.message}</p>}

                <label htmlFor='facebook'>Facebook</label><br />
                <input type='text' id='facebook' {
                    ...register("social.facebook")} />
                <br /><br />

                <label htmlFor='twitter'>Twitter</label><br />
                <input type='text' id='twitter' {
                    ...register("social.twitter")} />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
            <DevTool control={control} placement="top-right" />
        </div>
    )
}

export default Form
