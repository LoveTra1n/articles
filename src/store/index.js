import {configureStore} from "@reduxjs/toolkit";
import newReducer from "./newsSlice/NewsSlice"

export const store = configureStore({
    reducer:{
        newReducer
    }
})
