import userApi from "../api/UserAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAll = createAsyncThunk('user/getAll', async (params:any, thunkAPI:any) => {
  // thunkAPI.dispatch(...)
  const currentUser = await userApi.getAll();
  return currentUser;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {
      addUser: (state:any, action:any) => {
        state.push(action.payload);
      }
  },
  extraReducers: {
    [getAll.fulfilled]: (state:any, action:any) => {
      state.current = action.payload;
    },
  }
});

const { reducer, actions } = userSlice;
export const { addUser } = actions;
export default reducer;