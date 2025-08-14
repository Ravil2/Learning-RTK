import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++
    },
    decrement: (state, action) => {
      state.count--
    },
  },
})

export const counterReducer = counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
