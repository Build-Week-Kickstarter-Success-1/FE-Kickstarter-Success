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

export default function Login(){
    const [formValues,setFormValues] = useState(blankLogin)


    const formChange = (evt) =>{

        const {name,value} = evt.target

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


    return(
        <Router className="form">

            <h2>Sign In</h2>
            <form action=""
            onSubmit={onSubmit}>
                <label htmlFor="" className="input">Username
                    <input 
                    type="text" 
                    id="username"
                    name='username'
                    placeholder='Enter Username'
                    value={formValues.username}
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
                    value='Login'
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