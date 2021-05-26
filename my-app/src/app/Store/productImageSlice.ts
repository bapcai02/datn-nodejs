import productImageApi from "../api/productImageAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProductImage = createAsyncThunk('productimage/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await productImageApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createProductImage  = createAsyncThunk('productimage/create', async (params:any, thunkAPI:any) => {
  try {
    return await productImageApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteProductImage = createAsyncThunk('productimage/delete', async (params:any, thunkAPI:any) => {
  try {
    return await productImageApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateProductImage = createAsyncThunk('productimage/update', async (params:any, thunkAPI:any) => {
  try {
    return await productImageApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchProductImage = createAsyncThunk('productimage/search', async (params:any, thunkAPI:any) => {
  try {
    return await productImageApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const productImageSlice = createSlice({
  name: 'productImage',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get product
    [getProductImage.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getProductImage.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getProductImage.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create Product
    [createProductImage.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createProductImage.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createProductImage.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //update Product
    [updateProductImage.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateProductImage.fulfilled]: (state:any, action:any) => {
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
    [updateProductImage.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete Product
    [deleteProductImage.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteProductImage.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteProductImage.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search Product
     [searchProductImage.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchProductImage.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchProductImage.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = productImageSlice;
export default reducer;