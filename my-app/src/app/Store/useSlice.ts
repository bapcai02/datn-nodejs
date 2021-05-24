import userApi from "../api/UserAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAll = createAsyncThunk('user/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await userApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createUser = createAsyncThunk('user/create', async (params:any, thunkAPI:any) => {
  try {
    return await userApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteUser = createAsyncThunk('user/delete', async (params:any, thunkAPI:any) => {
  try {
    return await userApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateUser = createAsyncThunk('user/delete', async (params:any, thunkAPI:any) => {
  try {
    return await userApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
      // addUser: (state:any, action:any) => {
      //   state.list.push(action.payload);
      // }
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
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createUser.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete user
    [deleteUser.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteUser.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== (action.payload)[0].id
      });
      state.list = value;
      state.list.push((action.payload)[0])
      state.status = 'success';
    },
    [deleteUser.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

  }
});

const { reducer, actions } = userSlice;
export const { addUser } = actions;
export default reducer;