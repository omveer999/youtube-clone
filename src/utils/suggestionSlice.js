import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice({
    name:"suggestions",
    initialState: {},
    reducers:{
        setSuggestionsList:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
})

export const {setSuggestionsList}=suggestionSlice.actions;
export default suggestionSlice.reducer;