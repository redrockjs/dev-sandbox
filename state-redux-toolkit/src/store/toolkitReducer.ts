import {createAction, createReducer} from "@reduxjs/toolkit";

export type CounterState = {
  count: number
}

const initialState:CounterState = {
  count: 0
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const clear = createAction('CLEAR')

export default createReducer(initialState, {
  [increment.type]: (state: { count: number; }) => {
    state.count = state.count + 1
  },
  [decrement.type]: (state: { count: number; }) => {
    state.count = state.count - 1
  },
  [clear.type]: (state: { count: number; }) => {
    state.count = 0
  }
})