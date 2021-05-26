import productApi from "../api/productAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProduct = createAsyncThunk('product/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await productApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createProduct = createAsyncThunk('product/create', async (params:any, thunkAPI:any) => {
  try {
    return await productApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteProduct = createAsyncThunk('product/delete', async (params:any, thunkAPI:any) => {
  try {
    return await productApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateProduct = createAsyncThunk('product/update', async (params:any, thunkAPI:any) => {
  try {
    return await productApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchProduct = createAsyncThunk('product/search', async (params:any, thunkAPI:any) => {
  try {
    return await productApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get product
    [getProduct.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getProduct.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getProduct.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create Product
    [createProduct.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createProduct.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createProduct.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //update Product
    [updateProduct.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateProduct.fulfilled]: (state:any, action:any) => {
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
    [updateProduct.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete Product
    [deleteProduct.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteProduct.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteProduct.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search Product
     [searchProduct.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchProduct.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchProduct.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = productSlice;
export default reducer;