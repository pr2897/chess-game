import React, { useEffect, useState } from 'react';
import Board from './Board';
// import Chess from 'chess.js';
import useChess from '../hooks/useChess';
import { useHistory } from 'react-router-dom';

//validate chess move and then movePosition
// const chess = new Chess();
// let res = chess.move({ from: 'a2', to: 'a3' });
// console.log(chess.ascii(), res);
const style = {
  color: 'red',
  position: 'absolute',
  right: '20px',
  padding: '0.5em',
  borderRadius: '0.5rem',
  cursor: 'Pointer',
};

const ChessGame = (props) => {
  const [position, setPosition] = useChess();

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  useEffect(() => {
    let didCancel = localStorage.getItem('token');
    console.log('[in useEffect!]');
    if (!didCancel) {
      history.push('/');
    }
  }, [history]);

  return (
    <div>
      <button style={style} onClick={handleLogout}>
        Logout
      </button>
      <Board position={position} setPosition={setPosition} />;
    </div>
  );
};

export default ChessGame;
