import React from 'react';
import styled from 'styled-components/macro';
import Tile from './Tile';

//  ==================>> Styled Components <<========================

const BoardContainer = styled.div`
  width: 35rem;
  height: 35rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  box-shadow: 0.2rem 0.2rem 1rem #fff;
`;

//  ==================>> CHESSBOARD COMPONENTS <<========================

const Board = ({ position, setPosition }) => {
  const horizontal_axis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const vertical_axis = [1, 2, 3, 4, 5, 6, 7, 8];

  let toggleFlag = true; // for rendering white background if true else black

  const blackTile = {
    background: '#813000',
  };

  const whiteTile = {
    background: '#FFFFFF',
  };

  const getBoardPosition = (row, col) => {
    return `${vertical_axis[row]}${horizontal_axis[col]}`;
  };

  let col = -1;
  let row = 8;

  return (
    <BoardContainer>
      {position.map((chessRow) => {
        --row;
        toggleFlag = !toggleFlag;
        col = -1;
        return chessRow.map((peice) => {
          ++col;
          toggleFlag = !toggleFlag;
          const boardLoc = getBoardPosition(row, col);
          return (
            <Tile
              className='peice'
              peice={peice}
              key={boardLoc}
              tileColor={toggleFlag ? whiteTile : blackTile}
              data-position={boardLoc}
              _xy={boardLoc}
              position={position}
              setPosition={setPosition}
            />
          );
        });
      })}
    </BoardContainer>
  );
};

export default Board;
