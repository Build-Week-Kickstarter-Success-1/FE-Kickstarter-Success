import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import loginSchema from './valdation/loginSchema'

const blankLogin = {
  username: '',
  password: ''
};

const initialLoginErrors = {
    username: '',
    password:'',
}

const initialDisabled = true

export default function Login() {
  const [formValues, setFormValues] = useState(blankLogin);
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
      [name]: value
    });
  };
  
      useEffect(() => {
        loginSchema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid)
            console.log('Looks Good')
          })
      }, [formValues])

  const postLogin = (login) => {
    axiosWithAuth()
      .post('/api/auth/login', login)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/Dashboard');
      })
      .catch((err) => {
        debugger;
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
    postLogin(newLogin);
  };

  return (
    <div className='form'>
      <h2>Sign In</h2>
       <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
      <form action='' onSubmit={onSubmit}>
        <label htmlFor='' className='input'>
          Username
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter Username'
            value={formValues.username}
            onChange={formChange}
          />
        </label>
        <label htmlFor='' className='password'>
          Password
          <input
            type='password'
            id='password'
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
        <Link id='registerLink' to='/Register' className='signUp'>
          Sign Up Here
        </Link>
      </div>
    </div>
  );
}