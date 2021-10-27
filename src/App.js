import React from 'react';
import styled from 'styled-components';
import ChessBoard from './components/ChessBoard';

const App = () => {
  return (
    <AppContainer>
      <ChessBoard />
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
