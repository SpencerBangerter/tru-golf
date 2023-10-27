import { configureStore } from "@reduxjs/toolkit";
import roundDataReducer from "./slice/roundDataSlice";
import shotDataReducer from "./slice/shotDataSlice";
import playerDataReducer from "./slice/playerDataSlice";
export default configureStore({
  reducer: {
    roundData: roundDataReducer,
    shotData: shotDataReducer,
    playerData: playerDataReducer,
  },
});
