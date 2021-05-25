import quanhuyenApi from "../api/quanhuyenAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getQuanHuyen = createAsyncThunk('quanhuyen/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await quanhuyenApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createQuanHuyen = createAsyncThunk('quanhuyen/create', async (params:any, thunkAPI:any) => {
  try {
    return await quanhuyenApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteQuanHuyen = createAsyncThunk('quanhuyen/delete', async (params:any, thunkAPI:any) => {
  try {
    return await quanhuyenApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateQuanHuyen= createAsyncThunk('quanhuyen/update', async (params:any, thunkAPI:any) => {
  try {
    return await quanhuyenApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchQuanHuyen = createAsyncThunk('quanhuyen/search', async (params:any, thunkAPI:any) => {
  try {
    return await quanhuyenApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const quanhuyenSlice = createSlice({
  name: 'quanhuyen',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get QuanHuyen
    [getQuanHuyen.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getQuanHuyen.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getQuanHuyen.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create QuanHuyen
    [createQuanHuyen.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createQuanHuyen.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createQuanHuyen.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    // update QuanHuyen
    [updateQuanHuyen.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateQuanHuyen.fulfilled]: (state:any, action:any) => {
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
    [updateQuanHuyen.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete QuanHuyen
    [deleteQuanHuyen.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteQuanHuyen.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteQuanHuyen.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search QuanHuyen
     [searchQuanHuyen.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchQuanHuyen.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchQuanHuyen.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = quanhuyenSlice;
export default reducer;