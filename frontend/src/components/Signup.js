import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../services/api';

const SignupContainer = styled.div`
  width: 20rem;

  fieldset legend {
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 8px red;
  }

  .SignupForm {
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

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    API.post('/signup', { name, email, password, passwordConfirm })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <SignupContainer>
      <fieldset>
        <legend>Signup Here</legend>
        <div className='SignupForm'>
          <form onSubmit={handleSignup}>
            <input
              type='text'
              id='name'
              value={name}
              placeholder={'Enter Name Here'}
              onChange={(e) => setName(e.target.value)}
            />

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

            <input
              type='password'
              id='passwordConfirm'
              value={passwordConfirm}
              placeholder={'Enter Password Here'}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            <input type='submit' value='Signup' />
          </form>
        </div>

        <div className='signup'>
          Already Registered? <Link to='/'>Sign In Here</Link>
        </div>
      </fieldset>
    </SignupContainer>
  );
};

export default Signup;
