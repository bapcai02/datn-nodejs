import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/useSlice";
import tinhtpSlice from "../Store/tinhtpSlice";
import quanhuyenSlice from '../Store/quanhuyenSlice';
import productSlice from '../Store/productSlice';
import productImageApi from '../Store/productImageSlice';
import categoryApi from '../Store/categorySlice';
import brandApi from '../Store/brandSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    tinhtp: tinhtpSlice,
    quanhuyen: quanhuyenSlice,
    products: productSlice,
    productImage: productImageApi,
    brand: brandApi,
    category : categoryApi
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;