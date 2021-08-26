import {
  Action,
  UPDATE_STROKE,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
  UNDO,
  REDO
} from "./actions"
import { RootState } from "./types"

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
  historyIndex: 0
}

export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStroke: { ...state.currentStroke, points: [action.payload] }
      }
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload]
        }
      }
    }
    case SET_STROKE_COLOR: {
      return {
        ...state,
        currentStroke: { ...state.currentStroke, ...{ color: action.payload } }
      }
    }
    case END_STROKE: {
      if (!state.currentStroke.points.length) {
        return state
      }
      const historyLimit = state.strokes.length - state.historyIndex
      const newState = {
        ...state,
        historyIndex: 0,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [...state.strokes.slice(0, historyLimit), state.currentStroke]
      }
      return newState
    }
    case UNDO: {
      const historyIndex = Math.min(
        state.historyIndex + 1,
        state.strokes.length
      )
      return { ...state, historyIndex }
    }
    case REDO: {
      const historyIndex = Math.max(state.historyIndex - 1, 0)
      return { ...state, historyIndex }
    }
    default:
      return state
  }
}