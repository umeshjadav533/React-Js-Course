import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';
import * as yup from 'yup'
import emailSchema from './emailSchema';
import passwordSchema from './passwordSchema';

const registerSchema = yup.object({
    name: yup.string().
        required("name is Required")
        .test(
            "no-admin",
            "Admin not allowed",
            value => value !== "admin"
        )
        .trim()
        .lowercase(),
    email: yup.string()
        .email("Invalid email")
        .required("Email is required")
        .when("age", {
            is: age => age >= 25,
            then: schema =>
                schema
                    .email("Invalid Email")
                    .required("Email is required if age is 25 or above"),
            otherwise: schema => schema.notRequired()
        })
        .test(
            "check-email",
            "Email already exists",
            async value => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
                const data = await res.json();
                return data.length === 0
            }
        ),
    password: yup.string()
        .required("Password is required")
        .min(6, "Password must be 6 character"),
    // email: emailSchema,
    // password: passwordSchema,
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "password must match")
        .required(),
    age: yup.number()
        .min(18, "Age ust be at least 18")
        .required("Age is required"),
    skills: yup.array()
        .of(yup.string())
        .min(2, "Select at least 2 skills")
        .max(3, "You can select at most 3 skills")
});

export default registerSchema