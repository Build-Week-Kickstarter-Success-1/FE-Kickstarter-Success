import React, {useState, useEffect} from 'react'
import axios from 'axios'

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

    const postOrder = register => {

        axios.post('https://be-lambda-kickstarter-success.herokuapp.com/auth/register', register)
          .then(res => {
            console.log(register)
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
          size: formValues.username.trim(),
          sauce: formValues.password.trim(),
        }
        postOrder(newLogin)
      }


    return(
        <div className="form">
            <form action=""
            onSubmit={onSubmit}>
                <label htmlFor="" className="input">Username
                    <input 
                    type="text" 
                    id="username"
                    name='username'
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
                    value='Register'
                    />
                </label>
            </form>    

            <div>
                <p>Don't have an account yet? </p>
                <a href="" className="signUp">Sign Up Here</a>
            </div>
        </div>
    )
}