import { createSlice } from "@reduxjs/toolkit";

// reducer actions
const counter=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        // actions

        // incre
        increment:(state)=>{
            state.value+=1
        },
        // decre
        decrement:(state)=>{
            state.value-=1
        },
        
        // reset
        reset:(state)=>{
            state.value=0
        }
    }
})
// exort reducer
export default counter.reducer

// export actions
export const {increment,decrement,reset}=counter.actions