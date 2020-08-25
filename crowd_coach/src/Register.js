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


    return(
        <div className="form">

            <h2>Sign Up</h2>
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
                    />
                </label>
            </form>    

        </div>
    )
}