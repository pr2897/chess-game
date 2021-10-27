import React from 'react';
import styled from 'styled-components';

//  b -> BLACK peice    B -> WHITE peice

const peice_image = {
  b: 'images/bishop_b.png',
  B: 'images/bishop_w.png',
  k: 'images/king_b.png',
  K: 'images/king_w.png',
  n: 'images/knight_b.png',
  N: 'images/knight_w.png',
  p: 'images/pawn_b.png',
  P: 'images/pawn_w.png',
  q: 'images/queen_b.png',
  Q: 'images/queen_w.png',
  r: 'images/rook_b.png',
  R: 'images/rook_w.png',
};

const Tile = ({ peice = null, tileColor }) => {
  return (
    <Box style={tileColor}>
      {peice && peice !== '.' && (
        <Item src={peice_image[peice]} alt={`chess-peice`} />
      )}
    </Box>
  );
};

export default Tile;

const Box = styled.div`
  color: #bb53ef;
  border: 1px solid transparent;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.img`
  filter: drop-shadow(0 0 0.75rem #abf4b6);
`;
