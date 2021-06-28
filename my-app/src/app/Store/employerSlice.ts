import employerApi from "../api/employerAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getEmployer = createAsyncThunk('employer/getAll', async (params:any, thunkAPI:any) => {
  try{
    return await employerApi.getAll();
  }catch(exception) {
    console.log(exception);
  }
});

export const createEmployer  = createAsyncThunk('employer/create', async (params:any, thunkAPI:any) => {
  try {
    return await employerApi.create(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const deleteEmployer = createAsyncThunk('employer/delete', async (params:any, thunkAPI:any) => {
  try {
    return await employerApi.delete(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const updateEmployer = createAsyncThunk('employer/update', async (params:any, thunkAPI:any) => {
  try {
    return await employerApi.update(params);
  }catch(exception) {
    console.log(exception);
  }
});

export const searchEmployer = createAsyncThunk('employer/search', async (params:any, thunkAPI:any) => {
  try {
    return await employerApi.search(params);
  }catch(exception) {
    console.log(exception);
  }
});

const employerSlice = createSlice({
  name: 'employer',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // get employer
    [getEmployer.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [getEmployer.fulfilled]: (state:any, action:any) => {
      state.list = action.payload.data;
      state.status = 'success';
    },
    [getEmployer.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //create employer
    [createEmployer.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [createEmployer.fulfilled]: (state:any, action:any) => {
      state.list.push(action.payload);
      state.status = 'success';
    },
    [createEmployer.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //update employer
    [updateEmployer.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [updateEmployer.fulfilled]: (state:any, action:any) => {
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
    [updateEmployer.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

    //delete employer
    [deleteEmployer.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [deleteEmployer.fulfilled]: (state:any, action:any) => {
      const value = state.list.filter((obj: any) => {
        return obj.id !== action.payload;
      });
      state.list = value;
      state.status = 'success';
    },
    [deleteEmployer.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },

     //search employer
     [searchEmployer.pending]: (state:any, action:any) => {
      state.status = 'loading';
    },
    [searchEmployer.fulfilled]: (state:any, action:any) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [searchEmployer.rejected]: (state:any, action:any) => {
      state.status = 'failed';
    },
  }
});

const { reducer, actions } = employerSlice;
export default reducer;