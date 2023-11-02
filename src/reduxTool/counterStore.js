import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store=configureStore({
    reducer:{
        // List of reducers that will update the store
        counterReducer:counterSlice
    }
})