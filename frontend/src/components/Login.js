import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import API from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/play');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/login', {
      email,
      password,
    })
      .then(function ({ data }) {
        console.log(data.data);
        const token = data.token;
        localStorage.setItem('token', token);
        // localStorage.setItem('email', data.data.email);
        setPassword('');
        setEmail('');
        // <Redirect to='/play' />;
        history.push('/play');
      })
      .catch(function (error) {
        console.log(error.message);
        if (error.message.indexOf('401') !== -1)
          alert('Email or Password Incorrect!');
        else alert('Something went Wrong, Try Again!');
      });
  };

  return (
    <LoginContainer>
      <div>
        <h2>For testing Purpose</h2>
        <h3>Email id: "user@example.com", , </h3>
        <h3>Password: "password@123"</h3>
      </div>

      <fieldset>
        <legend>Login Here</legend>
        <div className='loginForm'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='email'
              value={email}
              placeholder={'Enter Email Here'}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              id='password'
              value={password}
              placeholder={'Enter Password Here'}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type='submit' value='Login' />
          </form>
        </div>
        <div className='signup'>
          New User? <Link to='/signup'>Sign Up Here</Link>
        </div>
      </fieldset>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 20rem;

  fieldset legend {
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 8px red;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;
  }

  input {
    background-color: transparent;
    color: white;
    width: 100%;
    text-align: center;
    height: 2rem;
    margin: 0.5rem 0;
  }
  input[type='submit'] {
    width: 100%;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    background-color: #212151;
    text-transform: uppercase;
  }

  .signup {
    font-size: 1.2rem;
    text-align: right;
    color: wheat;

    a {
      text-decoration: none;
      color: red;
    }
  }
`;
