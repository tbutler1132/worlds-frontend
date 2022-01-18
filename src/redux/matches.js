import { createSlice } from '@reduxjs/toolkit'

export const matchesSlice = createSlice({
  name: 'matches',
  initialState: { value: 0 },
  reducers: {
      incrementMatch(state){
          state.value ++
      }
  }
})

export const { incrementMatch } = matchesSlice.actions

export default matchesSlice.reducer