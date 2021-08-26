import { DragItem } from "../DragItem" 

export type Action =
  | {
      type: "SET_DRAGGED_ITEM"
      payload: DragItem | null
    }
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listId: string }
    }
  | {
      type: "MOVE_LIST"
      payload: {
        draggedId: string
        hoverId: string
      }
    }

export const moveList = (
  draggedId: string,
  hoverId: string,
): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggedId,
    hoverId,
  }
})

export const addTask = (
  text: string,
  listId: string,
): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId
  }
})

export const addList = (
  text: string,
): Action => ({
  type: "ADD_LIST",
  payload: text
})

export const setDraggedItem = (
  draggedItem: DragItem | null,
): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem
})
