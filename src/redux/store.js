import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import matchesReducer from './matches'

export default configureStore({
  reducer: {
    user: userReducer,
    matches: matchesReducer,
  },
})