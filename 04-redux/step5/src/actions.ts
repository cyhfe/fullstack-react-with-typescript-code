import { Point, Stroke } from "./types"

export const BEGIN_STROKE = "BEGIN_STROKE"
export const UPDATE_STROKE = "UPDATE_STROKE"
export const SET_STROKE_COLOR = "SET_STROKE_COLOR"
export const END_STROKE = "END_STROKE"
export const UNDO = "UNDO"
export const REDO = "REDO"
export const SHOW = "SHOW"
export const HIDE = "HIDE"

export type Action =
  | {
      type: typeof BEGIN_STROKE
      payload: Point
    }
  | {
      type: typeof UPDATE_STROKE
      payload: Point
    }
  | {
      type: typeof SET_STROKE_COLOR
      payload: string
    }
  | {
      type: typeof END_STROKE
      payload: { stroke: Stroke; historyLimit: number }
    }
  | {
      type: typeof UNDO
      payload: number
    }
  | {
      type: typeof REDO
    }
  | {
      type: typeof SHOW
      payload: string
    }
  | {
      type: typeof HIDE
    }

export const beginStroke = (x: number, y: number) => {
  return { type: BEGIN_STROKE, payload: { x, y } }
}

export const updateStroke = (x: number, y: number) => {
  return { type: UPDATE_STROKE, payload: { x, y } }
}

export const setStrokeColor = (color: string) => {
  return { type: SET_STROKE_COLOR, payload: color }
}

export const endStroke = (historyLimit: number, stroke: Stroke) => {
  return { type: END_STROKE, payload: { historyLimit, stroke } }
}

export const undo = (undoLimit: number) => {
  return { type: UNDO, payload: undoLimit }
}

export const redo = () => {
  return { type: REDO }
}

export const show = (modalName: string) => {
  return { type: SHOW, payload: modalName }
}

export const hide = () => {
  return { type: HIDE }
}
