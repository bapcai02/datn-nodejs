import tinhtpApi from "../api/tinhtpAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAll = createAsyncThunk('tinhtp/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await tinhtpApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createTinhTp = createAsyncThunk('tinhtp/create', async (params:any, thunkAPI:any) => {
  try {
    return await tinhtpApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteTinhTp = createAsyncThunk('tinhtp/delete', async (params:any, thunkAPI:any) => {
  try {
    return await tinhtpApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateTinhTp= createAsyncThunk('tinhtp/update', async (params:any, thunkAPI:any) => {
  try {
    return await tinhtpApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchTinhTp = createAsyncThunk('tinhtp/search', async (params:any, thunkAPI:any) => {
  try {
    return await tinhtpApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const tinhtpSlice = createSlice({
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
    [createTinhTp.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createTinhTp.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createTinhTp.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete user
    [deleteTinhTp.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteTinhTp.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== (action.payload)[0].id
      });
      state.list = value;
      state.list.push((action.payload)[0])
      state.status = 'success';
    },
    [deleteTinhTp.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search user
     [searchTinhTp.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchTinhTp.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchTinhTp.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = tinhtpSlice;
export const { addUser } = actions;
export default reducer;