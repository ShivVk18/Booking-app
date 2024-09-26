import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email:''
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email; // Set the email in the state
        },
        setEmail: (state, action) => {
            state.email = action.payload; // Action to update the email separately
        }
    }
});

// Ready Slice
const readySlice = createSlice({
    name: 'ready',
    initialState: {
        ready: false
    },
    reducers: {
        setReady: (state, action) => {
            state.ready = action.payload.ready;
        }
    }
});

// Exporting the actions
export const { setUser } = userSlice.actions;
export const { setReady } = readySlice.actions;

// Combining the reducers
const slicesReducer = combineReducers({
    user: userSlice.reducer,
    ready: readySlice.reducer
});

export default slicesReducer;
