import { createAction } from "@reduxjs/toolkit"
import { Stroke } from "../../utils/types"

export const endStroke = createAction<{
  stroke: Stroke
  historyIndex: number
}>("endStroke")

export const undo = createAction<number>("UNDO")

export const redo = createAction("REDO")