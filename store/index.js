import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import gameReducer from './gameSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    games: gameReducer
  },
})