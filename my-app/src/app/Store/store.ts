import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/useSlice";
import tinhtpSlice from "../Store/tinhtpSlice";
import quanhuyenSlice from '../Store/quanhuyenSlice';
import productSlice from '../Store/productSlice';
import productImageApi from '../Store/productImageSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    tinhtp: tinhtpSlice,
    quanhuyen: quanhuyenSlice,
    products: productSlice,
    productImage: productImageApi
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;