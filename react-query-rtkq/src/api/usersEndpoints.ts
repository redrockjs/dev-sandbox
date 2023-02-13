import {apiSlice} from './apiSlice'

const userEndpoints = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `users`
    }),
    getUser: build.query({
      query: (id = 1) => `users/${id}`
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: `users/${body.id}`,
        method: 'PUT',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    }),
    deleteUser: build.mutation({
      query: (body) => ({
        url: `users/${body.id}`,
        method: 'DELETE'
      })
    }),

  }),
  overrideExisting: false
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = userEndpoints