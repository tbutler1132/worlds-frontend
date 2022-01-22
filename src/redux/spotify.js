import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getMe = createAsyncThunk(
    'users/signin',
    async (token) => {
      const res = await axios(`http://localhost:7000/spotify/getMe?token=${token}`)
      return res.data
    }
  )

export const spotifySlice = createSlice({
    name: 'spotify',
    initialState: { me: {} },
    reducers: {
    },
    extraReducers: {
        [getMe.pending]: (state) => {
          state.status = "loading"
        },
        [getMe.fulfilled]: (state, { payload }) => {
          state.me = payload
          //Side effect, shouldn't occur in reducer. So change this.
          state.status = "success"
        },
        [getMe.rejected]: (state) => {
          state.status = "failed"
        }
      }
  })

  export default spotifySlice.reducer