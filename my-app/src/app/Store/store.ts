import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/useSlice";
import tinhtpSlice from "../Store/tinhtpSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    tinhtp: tinhtpSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;