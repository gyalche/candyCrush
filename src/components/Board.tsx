import React from 'react';
import { useAppSelector } from '../store/hook';
import Tile from './Tile';

const Board = () => {
  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );
  const size = 6.25 * boardSize;
  return (
    <div
      className="flex flex-wrap rounded-lg  blabla"
      style={{ width: `100rem` }}>
      {board.map((candy: string, index: number) => (
        <Tile candy={candy} key={index} candyId={index} />
      ))}
    </div>
  );
};

export default Board;
