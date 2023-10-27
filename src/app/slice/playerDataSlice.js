import { createSlice } from "@reduxjs/toolkit";
import playerData from "../../api/data/playerData.json";

const initialState = {
  playerData,
};

const playerDataSlice = createSlice({
  name: "playerState",
  initialState,
  reducers: {
    setPlayerData: (state, action) => {
      state.playerData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayerData } = playerDataSlice.actions;

export default playerDataSlice.reducer;
