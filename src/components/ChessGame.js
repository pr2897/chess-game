import React from 'react';
import ChessBoard from './Board';
import Chess from 'chess.js';
import useChess from '../hooks/useChess';

const chess = new Chess();

const ChessGame = () => {
  const [position, setPosition] = useChess();
  return <ChessBoard position={position} />;
};

export default ChessGame;
