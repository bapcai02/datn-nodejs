import tinhtpApi from "../api/tinhtpAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getTinhTp = createAsyncThunk('tinhtp/getAll', async (params:any, thunkAPI:any) => {
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
  name: 'tinhtp',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get Tinhtp
    [getTinhTp.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getTinhTp.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getTinhTp.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create Tinhtp
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

    // update Tinhtp
    [updateTinhTp.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateTinhTp.fulfilled]: (state:any, action:any) => {
      const newlist:any = [];
      state.list.map((obj: any, key:number) => {
         if(obj.id == (action.payload)[0].id){
          obj = (action.payload)[0];
         }
         newlist.push(obj);
      });
      state.list = newlist;
      state.status = 'success';
    },
    [updateTinhTp.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete Tinhtp
    [deleteTinhTp.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteTinhTp.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteTinhTp.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search Tinhtp
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
export default reducer;