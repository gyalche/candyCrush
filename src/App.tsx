import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hook';
import { updateBoard } from './store';
import { createBoard } from './utils/createBoard';
import Board from './components/Board';
import {
  formulaForColumnOfFour,
  formulaForColumnOfThree,
} from './utils/formulas';
import { isColumOfFour, isColumOfThree } from './utils/moveCheckedLogic';

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      isColumOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      dispatch(updateBoard(newBoard));
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
