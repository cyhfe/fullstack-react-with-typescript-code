import {
  Action,
  UPDATE_STROKE,
  BEGIN_STROKE,
  END_STROKE
} from "./actions"
import { RootState } from "./types"

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: []
}

export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [action.payload]
        }
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
    case END_STROKE: {
      if (!state.currentStroke.points.length) {
        return state
      }
      const newState = {
        ...state,
        historyIndex: 0,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [...state.strokes, state.currentStroke]
      }
      return newState
    }
    default:
      return state
  }
}
