import {
  beginStroke,
  setStrokeColor,
  updateStroke,
  endStroke
} from "../../actions"
import { createReducer } from "@reduxjs/toolkit"
import { RootState } from "../../utils/types"

const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000"
}

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(beginStroke, (state, action) => {
    state.points = [action.payload]
  })
  builder.addCase(updateStroke, (state, action) => {
    state.points.push(action.payload)
  })
  builder.addCase(setStrokeColor, (state, action) => {
    state.color = action.payload
  })
  builder.addCase(endStroke, (state, action) => {
    state.points = []
  })
})
