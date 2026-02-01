import * as yup from 'yup'

const emailSchema = yup.string()
    .email("Invalid email")
    .required("Email is required")

export default emailSchema;