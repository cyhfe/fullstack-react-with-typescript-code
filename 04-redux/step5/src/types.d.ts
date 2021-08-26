import { ModalState } from "./modules/modal/reducer"

export type Point = {
  x: number
  y: number
}

export type Stroke = {
  points: Point[]
  color: string
}

export type Project = {
  image: string;
  name: string;
  id: string
}

export type RootState = {
  currentStroke: Stroke
  strokes: Stroke[]
  historyIndex: number
  modalVisible: ModalState
}