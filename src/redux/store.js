import {rootReducer} from "./rootReducer.js";
import {configureStore} from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:rootReducer
})
