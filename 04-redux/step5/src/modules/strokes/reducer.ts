import {
  Action,
  END_STROKE,
} from "../../actions"
import { RootState } from "../../types"

export const reducer = (
  state: RootState["strokes"] = [],
  action: Action
) => {
  switch (action.type) {
    case END_STROKE: {
      const { historyLimit, stroke } = action.payload
      if (!stroke.points.length) {
        return state
      }
      return [...state.slice(0, state.length - historyLimit), stroke]
    }
    default:
      return state
  }
}