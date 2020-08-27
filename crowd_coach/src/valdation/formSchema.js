import * as yup from 'yup'

const formSchema = yup.object().shape({    
  
  title: yup
    .string()
    .min(2, 'Must be longer than 2 characters')
    .required('Must be longer than 2 characters'),
  monetary_goal: yup
    .number()
    .required("Must have a valid monetary goal"),
  launch_date: yup
    .string()
    .min(6, 'You must enter in a date MM/DD/YYYY')
    .required('Must have a start date'),
  finish_date: yup
    .string()
    .min(6, 'You must enter in a date MM/DD/YYYY')
    .required('Must have an end date'),
  category: yup
    .string()
    .oneOf(['Hardware',	'Plays',	'Gadgets',	'Musical',	'Software',	'Festivals',	'Apps',	'Wearables',	'Web',	'Sound',	'Robots',	'Experimental',	'Other'], 'You must select a Category'),
    
  description: yup
    .string()
    .max(1000, 'You can only use 1000 characters'),

})

export default formSchema
