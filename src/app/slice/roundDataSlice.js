import { createSlice } from "@reduxjs/toolkit";
import roundData from "../../api/data/roundData.json";

const initialState = {
  roundData,
};

const roundDataSlice = createSlice({
  name: "roundState",
  initialState,
  reducers: {
    setRoundData: (state, action) => {
      state.nextStepsState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRoundData } = roundDataSlice.actions;

export default roundDataSlice.reducer;
