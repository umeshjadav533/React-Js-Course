import * as yup from 'yup'

const passwordSchema = yup.string()
    .required("Password is required")
    .min(6, "Password must be 6 character")

export default passwordSchema;