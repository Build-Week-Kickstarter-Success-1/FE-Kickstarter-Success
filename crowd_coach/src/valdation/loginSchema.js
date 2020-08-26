import * as yup from 'yup'

const loginSchema = yup.object().shape({
    username: yup
    .string()
    .min(8,'must be at least 8 characters')
    .required('Must be at least 8 characters'),
  password: yup
    .string()
    .min(8,'must be at least 8 characters')
    .required('Must be at least 8 characters'),
})

export default loginSchema