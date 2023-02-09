import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => `posts`
    })
  }),
});


export const {useGetPostsQuery} = apiSlice;