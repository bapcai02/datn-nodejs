import userReducer from '../Store/useSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;