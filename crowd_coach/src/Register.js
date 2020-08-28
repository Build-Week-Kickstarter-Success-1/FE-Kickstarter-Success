import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();
    
    const formChange = (evt) => {
    const { name, value } = evt.target;
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

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const postOrder = (register) => {
    axiosWithAuth()
      .post('/api/auth/register', register)
      .then((res) => {
        console.log(res.data);
        history.push('/Login');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(blankLogin);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const submit = () => {
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    };
    postOrder(newLogin);
  };

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