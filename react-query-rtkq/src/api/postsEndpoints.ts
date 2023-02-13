import {apiSlice} from './apiSlice'

const postsEndpoints = apiSlice.injectEndpoints({
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
        url: `posts/${body.id}`,
        method: 'PUT',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      })
    })
  }),
  overrideExisting: false
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation
} = postsEndpoints