import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Register from './Register'
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

    const postLogin = login => {

        axios.post('https://be-lambda-kickstarter-success.herokuapp.com/api/auth/login', login)
          .then(res => {
            console.log(login)
        })
          .catch(err => {
            debugger
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
        postLogin(newLogin)
      }

      useEffect(() => {
        loginSchema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid)
            console.log('Looks Good')
          })
      }, [formValues])


    return(
        <Router className="form">

            <h2>Sign In</h2>
            
            <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
                <form action=""
            onSubmit={onSubmit}>
              <div className='inputBox'>
                <label htmlFor="username" className="input">Username:                </label>
                      <input 
                      type="text" 
                      id="username"
                      name='username'
                      value={formValues.username}
                      placeholder='Enter Username'
                      onChange={formChange}
                      />
                
              </div>
              <div className='inputBox'>

                <label htmlFor="password" className="password">Password:                </label>

                    <input 
                    type="password" 
                    id="password"
                    name='password'
                    value={formValues.password}
                    placeholder='Enter Password'
                    onChange={formChange}
                    />
                </div>
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

            <div>
                <p>Don't have an account yet? </p>
                <Link id="registerLink" to='/Register' className="signUp">Sign Up Here</Link>
            </div>

            <Switch>
            <Route path="/Register">
                <Register/>
            </Route>
            {/* <Route path="/">
                <App />
            </Route> */}
            </Switch>

        </Router>
    )
}