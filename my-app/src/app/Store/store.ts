import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/useSlice";

const store = configureStore({
  reducer: {
    users: userReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;