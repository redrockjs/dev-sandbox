import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const rootReducer = combineReducers({
  rootReducer: toolkitReducer
})

export const store = configureStore({
  reducer:{
    root: rootReducer
  }
})