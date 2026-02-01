import * as yup from 'yup'
import emailSchema from './emailSchema'
import passwordSchema from './passwordSchema'

const loginSchema = yup.object({
    email: emailSchema,
    password: passwordSchema
});

export default loginSchema;