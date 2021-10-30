import React from 'react';
import styled from 'styled-components/macro';
import ChessGame from './components/ChessGame';

const App = () => {
  return (
    <AppContainer>
      <ChessGame />
    </AppContainer>
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
