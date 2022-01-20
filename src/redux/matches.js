import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getPotentialMatches = createAsyncThunk(
    'matches/potential',
    async () => {
      const res = await axios.get('http://localhost:7000/users')
      return res.data
    }
  )

export const matchesSlice = createSlice({
    name: 'matches',
    initialState: { potential: [] },
    extraReducers: {
        [getPotentialMatches.pending]: (state) => {
        state.status = "loading"
        },
        [getPotentialMatches.fulfilled]: (state, { payload }) => {
        state.potential = payload
        state.status = "success"
        },
        [getPotentialMatches.rejected]: (state) => {
        state.status = "failed"
        },
    }
})

export const { incrementMatch } = matchesSlice.actions

export default matchesSlice.reducer