import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../../Store/store';
import  UserInterface  from './user';

const initialState : UserInterface[] = [];

const UserSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<UserInterface>) {
            state.push(action.payload);
        },
    }
});

export const addUser = (
    text: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newUser : UserInterface = {
        id: Math.random().toString(36).substr(2, 9),
        completed: false,
        text: text,
    }

    dispatch(UserSlice.actions.addUser(newUser))
}

export default UserSlice.reducer;  