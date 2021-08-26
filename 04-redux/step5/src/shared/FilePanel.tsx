import React from "react"
import { useCanvas } from "../CanvasContext"
import { saveAs } from "file-saver"
import { getCanvasImage } from "../canvasUtils"

export const FilePanel = () => {
  const canvasRef = useCanvas()

  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current)
    if (!file) {
      return
    }
    saveAs(file, "drawing.png")
  }

  return (
    <div className="window file">
      <div className="title-bar">
        <div className="title-bar-text">File</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={exportToFile}>
            Export
          </button>
        </div>
      </div>
    </div>
  )
}
