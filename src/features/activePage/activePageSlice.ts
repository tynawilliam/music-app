import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivePageState {
  value: string;
}

const initialState: ActivePageState = {
  value: "Home",
};

export const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;

export default activePageSlice.reducer;
