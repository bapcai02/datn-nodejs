import brandApi from "../api/brandAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getBrand = createAsyncThunk('brand/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await brandApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createBrand   = createAsyncThunk('brand/create', async (params:any, thunkAPI:any) => {
  try {
    return await brandApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteBrand  = createAsyncThunk('brand/delete', async (params:any, thunkAPI:any) => {
  try {
    return await brandApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateBrand = createAsyncThunk('brand/update', async (params:any, thunkAPI:any) => {
  try {
    return await brandApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchBrand = createAsyncThunk('brand/search', async (params:any, thunkAPI:any) => {
  try {
    return await brandApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get product
    [getBrand.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getBrand.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getBrand.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create Product
    [createBrand.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createBrand.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createBrand.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //update Product
    [updateBrand.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateBrand.fulfilled]: (state:any, action:any) => {
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
    [updateBrand.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete Product
    [deleteBrand.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteBrand.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteBrand.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search Product
     [searchBrand.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchBrand.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchBrand.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = brandSlice;
export default reducer;