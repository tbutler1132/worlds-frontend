import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signupUser = createAsyncThunk(
  'users/signup',
  async (userObj) => {
    const res = await axios.post('http://localhost:7000/users/signup', userObj)
    console.log(res.data)
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


export const spotifyLogin = createAsyncThunk(
  'users/spotify',
  async (code) => {
    console.log("I'M HIT GARGHGHGGH")
    const res = await axios(`http://localhost:7000/users/spotify?code=${code}`)
    return res.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: {}, spotifyUser: {}, auth: {}, editedUser: {}},
  reducers: {
      setUser(state, action){
        state.currentUser = action.payload
      },
      editBio(state, action){
        console.log(action.payload)
        state.editedUser.bio = action.payload
      }
  },
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.status = "loading"
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload.result
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

    [spotifyLogin.pending]: (state) => {
      state.status = "loading"
    },
    [spotifyLogin.fulfilled]: (state, { payload }) => {
      state.auth = payload.auth
      state.currentUser = payload.user
      state.spotifyUser = payload.spotify
      state.status = "success"
    },
    [spotifyLogin.rejected]: (state) => {
      state.status = "failed"
    },
  }
})

export const { setUser, editBio } = userSlice.actions

export default userSlice.reducer