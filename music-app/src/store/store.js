import { configureStore } from '@reduxjs/toolkit';
import { playListSlice } from './slices/playListSlice';

export const store = configureStore({
    reducer: {
      playList: playListSlice.reducer,
  },
})

