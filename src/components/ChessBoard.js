import React from 'react';
import styled from 'styled-components';

const horizontal_axis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const vertical_axis = [1, 2, 3, 4, 5, 6, 7, 8];

//  ==================>> custom style Objects <<========================

const blackTile = {
  background: '#813000',
};
const whiteTile = {
  background: '#FFFFFF',
};

//  ==================>> Styled Components <<========================

const ChessBoardContainer = styled.div`
  background-color: black;
  width: 35rem;
  height: 35rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

const Tile = styled.div`
  border: 1px solid red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//  ==================>> CHESSBOARD COMPONENTS <<========================

const ChessBoard = () => {
  let board = [];
  let isWhite = true;

  vertical_axis
    .slice()
    .reverse()
    .forEach((vi, v_) => {
      horizontal_axis.forEach((hi, h_) => {
        let tileClass = `${hi}${vi} `;

        const tileStyle = isWhite ? whiteTile : blackTile;
        tileClass += isWhite ? 'white' : 'black';

        isWhite = !isWhite;

        board.push(
          <Tile style={tileStyle} key={tileClass} className={tileClass}>
            {tileClass}
          </Tile>
        );
      });
      isWhite = !isWhite;
    });

  return <ChessBoardContainer>{board}</ChessBoardContainer>;
};

export default ChessBoard;
