import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface User {
    name: string,
    email: string,
    password: string | number
};

interface initialState {
    user: User
}

const initialState: initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth: (state, action: PayloadAction<User>) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
        },
    },
});


export default userSlice;

export const { auth } = userSlice.actions

