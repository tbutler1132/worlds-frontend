import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getPotentialMatches = createAsyncThunk(
    'matches/potential',
    async (userId) => {
      const res = await axios.get(`http://localhost:7000/users?id=${userId}`)
      return res.data
    }
)


export const fetchMatches = createAsyncThunk(
    'matches/fetch',
    async (userId) => {
        const res = await axios.get(`http://localhost:7000/users/${userId}/matches`)
        return res.data
    }
)

export const createMatch = createAsyncThunk(
  
)

export const matchesSlice = createSlice({
    name: 'matches',
    initialState: { potential: [], current: [] },
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


        [fetchMatches.pending]: (state) => {
        state.status = "loading"
        },
        [fetchMatches.fulfilled]: (state, { payload }) => {
        state.current = payload
        state.status = "success"
        },
        [fetchMatches.rejected]: (state) => {
        state.status = "failed"
        },
    }
})

export const { incrementMatch } = matchesSlice.actions

export default matchesSlice.reducer