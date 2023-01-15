import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hook';
import { updateBoard } from './store';
import { createBoard } from './utils/createBoard';
import Board from './components/Board';

function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );
  console.log(board);
  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [dispatch, boardSize]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
