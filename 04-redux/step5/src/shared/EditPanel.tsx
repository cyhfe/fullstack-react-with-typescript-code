import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { undo, redo } from "../actions"
import { strokesLengthSelector } from "../modules/strokes/selectors"

export const EditPanel = () => {
  const dispatch = useDispatch()
  const undoLimit = useSelector(strokesLengthSelector)

  return (
    <div className="window edit">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button
            className="button redo"
            onClick={() => dispatch(undo(undoLimit))}
          >
            Undo
          </button>
          <button
            className="button undo"
            onClick={() => dispatch(redo())}
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  )
}
