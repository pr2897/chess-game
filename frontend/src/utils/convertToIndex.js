import { cloneDeep } from 'lodash';
const getCharCode = (c) => c.charCodeAt(0); // 'a' = 0

function convertToIndex(position) {
  const [x, y] = position.split('');
  let row = 8 - Number(x);
  let col = getCharCode(y) - getCharCode('a');

  return [row, col];
}

export default function move(chessState, setPosition, from, to) {
  // 2f -> 3b
  let [from_x, from_y] = convertToIndex(from);
  let [to_x, to_y] = convertToIndex(to);

  console.log(`${chessState[from_x][from_y]} -> ${chessState[to_x][to_y]}`);

  const modifiedObj = cloneDeep(chessState);

  modifiedObj[to_x][to_y] = modifiedObj[from_x][from_y];
  modifiedObj[from_x][from_y] = '.';

  setPosition(modifiedObj);
  console.log('I executed');
}
