import { createAction } from "@reduxjs/toolkit"
import { Stroke, Point } from "../../utils/types"

export const beginStroke = createAction<Point>("BEGIN_STROKE")

export const updateStroke = createAction<Point>("UPDATE_STROKE")

export const setStrokeColor = createAction<string>("SET_STROKE_COLOR")

export const endStroke = createAction<{
  stroke: Stroke
  historyIndex: number
}>("endStroke")