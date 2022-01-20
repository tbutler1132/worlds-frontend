import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signupUser = createAsyncThunk(
  'users/signup',
  async (userObj) => {
    const res = await axios.post('http://localhost:7000/users/signup', userObj)
    return res.data
  }
)

export const signinUser = createAsyncThunk(
  'users/signin',
  async (userObj) => {
    const res = await axios.post('http://localhost:7000/users/signin', userObj)
    return res.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: {} },
  reducers: {
      setUser(state, action){
          state.currentUser = action.payload
      }
  },
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.status = "loading"
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload.result
      //Side effect, shouldn't occur in reducer. So change this.
      localStorage.setItem("currentUser", JSON.stringify(payload.result))
      state.status = "success"
    },
    [signupUser.rejected]: (state) => {
      state.status = "failed"
    },
    
    [signinUser.pending]: (state) => {
      state.status = "loading"
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload.result
      state.status = "success"
    },
    [signinUser.rejected]: (state) => {
      state.status = "failed"
    },
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer