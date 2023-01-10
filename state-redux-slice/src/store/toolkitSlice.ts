import {createSlice} from "@reduxjs/toolkit";

export type CounterType = {
  toolkit: {
    count: number
  }
}

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    },
    clear(state) {
      state.count = 0
    }
  }
})

export default toolkitSlice.reducer
export const {increment, decrement, clear} = toolkitSlice.actions