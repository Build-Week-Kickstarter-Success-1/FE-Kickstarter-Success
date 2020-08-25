import React, { useState, useEffect } from 'react';
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

  return (
    <div className='form'>
      <h2>Sign Up</h2>
      <form action='' onSubmit={onSubmit}>
        <label htmlFor='' className='input'>
          Username
          <input
            type='text'
            id='username'
            name='username'
            value={formValues.username}
            placeholder='Select a Unique Username'
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
            value='Register'
          />
        </label>
      </form>
    </div>
  );
}
