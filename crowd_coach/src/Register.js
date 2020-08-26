import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import loginSchema from './valdation/loginSchema'

const blankLogin = {
    username:'',
    password:''
}


const initialLoginErrors = {
    username: '',
    password:'',
}

const initialDisabled = true


export default function Login(){
    const [formValues,setFormValues] = useState(blankLogin)
    const [formErrors, setFormErrors] = useState(initialLoginErrors)
    const [disabled, setDisabled] = useState(initialDisabled)



    const formChange = (evt) =>{

        const {name,value} = evt.target

        yup
        .reach(loginSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: ""
          });
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          });
        })
        

        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const postOrder = register => {

        axios.post('https://be-lambda-kickstarter-success.herokuapp.com/api/auth/register', register)
          .then(res => {
            console.log(register)
        })
          .catch(err => {
            debugger
            console.log(err)
          })
          .finally(() => {
            setFormValues(blankLogin)
          })
      }

      const onSubmit = (evt) =>{
          evt.preventDefault()
          submit()
      }

      const submit = () => {
        const newLogin = {
          username: formValues.username.trim(),
          password: formValues.password.trim(),
        }
        postOrder(newLogin)
      }

      useEffect(() => {
        loginSchema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid)
            console.log('Looks Good')
          })
      }, [formValues])


    return(
        <div className="form">

            <h2>Sign Up</h2>

            <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
            <form action=""
            onSubmit={onSubmit}>
                <label htmlFor="" className="input">Username
                    <input 
                    type="text" 
                    id="username"
                    name='username'
                    value={formValues.username}
                    placeholder='Select a Unique Username'
                    onChange={formChange}
                    />
                </label>
                <label htmlFor="" className="password">Password
                    <input 
                    type="password" 
                    id="password"
                    name='password'
                    value={formValues.password}
                    onChange={formChange}
                    />
                </label>
                <label className='submit'>
                    <input
                    onClick={submit}
                    type='submit'
                    id='submitBtn'
                    name='submitBtn'
                    value='Register'
                    disabled={disabled}
                    />
                </label>
            </form>    

        </div>
    )
}