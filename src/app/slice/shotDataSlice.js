import { createSlice } from "@reduxjs/toolkit";
import shotData from "../../api/data/shotsNine.json";

const initialState = {
  shotData,
  filteredShots: [],
};
const shotDataSlice = createSlice({
  name: "shotState",
  initialState,
  reducers: {
    setShotData: (state, action) => {
      // doing it this way to avoid mutating shot data state, we can always display the filtered set to the user
      // while keeping the original data in tact.
      state.shotData = action.payload;
      state.filteredShots = action.payload;
    },
    // This reducer is used to filter the shot data and update the filteredShots field
    filterShots: (state, action) => {
      const filters = action.payload;
      if (filters.length === 0) {
        state.filteredShots = state.shotData;
        return;
      } else
        state.filteredShots = state.shotData.filter((shot) => {
          return filters.some((key) => key === shot.clubTypeKey);
        });
    },
    clearFilteredShots: (state) => {
      state.filteredShots = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShotData, filterShots, clearFilteredShots } =
  shotDataSlice.actions;

export default shotDataSlice.reducer;
