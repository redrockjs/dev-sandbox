import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const apiSlice = createApi({
      reducerPath: "api",
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints: (build) => ({
        getPosts: build.query({
          query: () => `posts`
        }),
        getPost: build.query({
          query: (id = 1) => `posts/${id}`
        }),
        addPost: build.mutation({
          query: (body) => (
            {
              url: "posts",
              method: 'POST',
              body,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            })
        }),
        updatePost: build.mutation({
          query: (body) => ({
            url: "posts",
            method: 'PUT',
            body,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
          })
        })
      }),
    }
  )
;


export const {useGetPostsQuery, useGetPostQuery, useAddPostMutation, useUpdatePostMutation} = apiSlice;