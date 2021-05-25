import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/useSlice";
import tinhtpSlice from "../Store/tinhtpSlice";
import quanhuyenSlice from '../Store/quanhuyenSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    tinhtp: tinhtpSlice,
    quanhuyen: quanhuyenSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;