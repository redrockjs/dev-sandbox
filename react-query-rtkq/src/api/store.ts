import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (gDM) => gDM().concat(apiSlice.middleware),
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export default store;
