import { candies } from './candyData';
export const createBoard = (boardSize: number = 8) =>
  new Array(boardSize * boardSize)
    .fill(null)
    .map(() => candies[Math.floor(Math.random() * candies.length)]);
