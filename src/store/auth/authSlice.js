import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
    },
    reducers: {
        onChecking: state => {
            state.status = 'checking';
            state.user = {};
        },

        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: state => {
            state.status = 'unauthenticated';
            state.user = {};
        },

        onUpdateUserProfile: (state, { payload }) => {
            state.user = payload;
        },

        onClearUserProfile: state => {
            state.user = {};
        },
    },
});

export const {
    onChecking,
    onLogin,
    onLogout,
    onUpdateUserProfile,
    onClearUserProfile,
} = authSlice.actions;
