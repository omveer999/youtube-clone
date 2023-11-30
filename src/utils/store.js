import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import suggestionSlice from "./suggestionSlice";

const store=configureStore({
 reducer:{
    app:appSlice,
    suggestions:suggestionSlice
 }
})

export default store;