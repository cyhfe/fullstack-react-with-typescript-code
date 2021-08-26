import { useDrag } from "react-dnd"
import { useAppState } from "../state/AppStateContext"
import { DragItem } from "../DragItem"
import { useEffect } from "react"
import { getEmptyImage } from "react-dnd-html5-backend"
import { setDraggedItem } from "../state/actions"

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item))
      return item
    },
    end: () => dispatch(setDraggedItem(null))
  })
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])
  return { drag }
}
