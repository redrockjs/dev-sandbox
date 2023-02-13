import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: () => ({}),
})