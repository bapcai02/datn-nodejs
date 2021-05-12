import {createReducer} from '@reduxjs/toolkit'

const userReducer = createReducer(0, {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload
})

export default userReducer;