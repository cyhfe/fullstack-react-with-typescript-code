import { useDragLayer } from "react-dnd"
import { useAppState } from "./state/AppStateContext"
import { Column } from "./Column"
import {
  CustomDragLayerContainer,
  DragPreviewWrapper
} from "./styles"
import { Card } from "./Card"

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState()
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <Column
            id={draggedItem.id}
            text={draggedItem.text}
            isPreview
          />
        ) : (
          <Card
            id={draggedItem.id}
            columnId={draggedItem.columnId}
            text={draggedItem.text}
            isPreview
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null
}
