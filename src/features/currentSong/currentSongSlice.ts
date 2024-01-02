import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongItem } from "../../types/types";

interface CurrentSongState {
  value: SongItem | null;
}

const initialState: CurrentSongState = {
  value: null,
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<SongItem>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;
