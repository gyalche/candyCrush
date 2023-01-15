import { configureStore, PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: {
  board: string[];
  boardSize: number;
} = {
  board: [],
  boardSize: 8,
};

const candyCrushSlice = createSlice({
  name: 'candyCrush',
  initialState,
  reducers: {
    updateBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload;
    },
  },
});
export const { updateBoard } = candyCrushSlice.actions;

export const store = configureStore({
  reducer: {
    candyCrush: candyCrushSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
