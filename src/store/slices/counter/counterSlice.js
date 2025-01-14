import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
        state.counter -=1
    },
    increment2: (state, action ) => {
        state.counter += action.payload
    }
  },
})

export const { increment, decrement, increment2 } = counterSlice.actions

