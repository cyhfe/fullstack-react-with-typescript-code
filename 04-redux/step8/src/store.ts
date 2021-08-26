import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action
} from "@reduxjs/toolkit"
import {currentStroke} from './modules/currentStroke/slice'
import {modalVisible} from './modules/modals/slice'
import {projectsList} from './modules/projectsList/slice'
import historyIndex from './modules/historyIndex/slice'
import strokes from './modules/strokes/slice'
import logger from "redux-logger"
import { RootState } from "./utils/types"

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
    modalVisible,
    projectsList
  },
  middleware
})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
