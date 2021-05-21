import userApi from "../api/UserAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAll = createAsyncThunk('user/getAll', async (params:any, thunkAPI:any) => {
  return await userApi.getAll();
});

export const createUser = createAsyncThunk('user/create', async (params:any, thunkAPI:any) => {
  return await userApi.create(params);
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
      addUser: (state:any, action:any) => {
        state.list.push(action.payload);
      }
  },
  extraReducers: {
    // get user
    [getAll.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getAll.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [getAll.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create user
    [createUser.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },

    [createUser.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },

    [createUser.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = userSlice;
export const { addUser } = actions;
export default reducer;