import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, Stroke } from "../../utils/types"
import { endStroke } from "../sharedActions"

const initialStrokes: RootState["strokes"] = []

const strokes = createSlice({
  name: "strokes",
  initialState: initialStrokes,
  reducers: {
    setStrokes: (state, action: PayloadAction<Stroke[]>) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state, action) => {
      const { historyIndex, stroke } = action.payload
      if (historyIndex === 0) {
        state.push(stroke)
      } else {
        state.splice(-historyIndex, historyIndex, stroke)
      }
    })
  }
})

export const { setStrokes } = strokes.actions

export default strokes.reducer
