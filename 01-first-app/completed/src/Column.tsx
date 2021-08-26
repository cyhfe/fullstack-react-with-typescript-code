import { useRef } from "react"
import { ColumnContainer, ColumnTitle } from "./styles"
import { useAppState } from "./state/AppStateContext"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"
import { useItemDrag } from "./utils/useItemDrag"
import { useDrop } from "react-dnd"
import { isHidden } from "./utils/isHidden"
import {
  moveTask,
  moveList,
  addTask,
  setDraggedItem
} from "./state/actions"

type ColumnProps = {
  text: string
  id: string
  isPreview?: boolean
}

export const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover() {
      if (!draggedItem) {
        return
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return
        }

        dispatch(moveList(draggedItem.id, id))
      } else {
        if (draggedItem.columnId === id) {
          return
        }
        if (tasks.length) {
          return
        }

        dispatch(
          moveTask(draggedItem.id, null, draggedItem.columnId, id)
        )
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
      }
    }
  })

  const { drag } = useItemDrag({ type: "COLUMN", id, text })

  drag(drop(ref))

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, draggedItem, "COLUMN", id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card
          id={task.id}
          columnId={id}
          text={task.text}
          key={task.id}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  )
}
