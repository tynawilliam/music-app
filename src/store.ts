import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./features/activePage/activePageSlice";
import currentSongReducer from "./features/currentSong/currentSongSlice";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    currentSong: currentSongReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
