import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {currentStroke} from './modules/currentStroke/slice'
import historyIndex from './modules/historyIndex/slice'
import strokes from './modules/strokes/slice'
import logger from "redux-logger"

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
  },
  middleware
})
