import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
  rootReducer: toolkitSlice
})

export const store = configureStore({
  reducer:{
    root: rootReducer
  }
})