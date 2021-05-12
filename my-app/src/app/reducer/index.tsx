import userReducer from './UserReducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    user: userReducer,
})
export default rootReducer;