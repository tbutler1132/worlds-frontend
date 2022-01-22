import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import matchesReducer from './matches'
import spotifyReducer from './spotify'

export default configureStore({
  reducer: {
    user: userReducer,
    matches: matchesReducer,
    spotify: spotifyReducer,
  },
})