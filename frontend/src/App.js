import React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import ChessGame from './components/ChessGame';
import Login from './components/Login';
import Signup from './components/Signup.js';

const App = () => {
  return (
    <Switch>
      <AppContainer>
        <Route path='/play'>
          <ChessGame />
        </Route>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
      </AppContainer>
    </Switch>
  );
};

export default App;

const AppContainer = styled.div`
  background: #213524;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
