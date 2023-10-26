import { configureStore } from "@reduxjs/toolkit";
import roundDataReducer from "./slice/roundDataSlice";
import shotDataReducer from "./slice/shotDataSlice";
export default configureStore({
  reducer: {
    roundData: roundDataReducer,
    shotData: shotDataReducer,
  },
});
