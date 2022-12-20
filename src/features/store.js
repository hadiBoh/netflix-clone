import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/reduxContext";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware)
    ,
    devTools:true
})


setupListeners(store.dispatch)