import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const blankLogin = {
  username: '',
  password: ''
};

export default function Login() {
  const [formValues, setFormValues] = useState(blankLogin);
  const history = useHistory();

  const formChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

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
