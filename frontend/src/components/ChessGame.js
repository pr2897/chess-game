import React from 'react';
import Board from './Board';
// import Chess from 'chess.js';
import useChess from '../hooks/useChess';

//validate chess move and then movePosition
// const chess = new Chess();
// let res = chess.move({ from: 'a2', to: 'a3' });
// console.log(chess.ascii(), res);

const ChessGame = () => {
  const [position, setPosition] = useChess();

  return <Board position={position} setPosition={setPosition} />;
};

export default ChessGame;
