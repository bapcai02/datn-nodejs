import categoryApi from "../api/categoryAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategory = createAsyncThunk('category/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await categoryApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createCategory  = createAsyncThunk('category/create', async (params:any, thunkAPI:any) => {
  try {
    return await categoryApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteCategory = createAsyncThunk('category/delete', async (params:any, thunkAPI:any) => {
  try {
    return await categoryApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateCategory = createAsyncThunk('category/update', async (params:any, thunkAPI:any) => {
  try {
    return await categoryApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchCategory = createAsyncThunk('category/search', async (params:any, thunkAPI:any) => {
  try {
    return await categoryApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get Category
    [getCategory.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getCategory.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getCategory.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create Category
    [createCategory.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createCategory.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createCategory.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //update Category
    [updateCategory.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateCategory.fulfilled]: (state:any, action:any) => {
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
    [updateCategory.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete Category
    [deleteCategory.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteCategory.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteCategory.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search Category
     [searchCategory.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchCategory.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchCategory.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = categorySlice;
export default reducer;