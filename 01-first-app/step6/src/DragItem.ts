export type CardDragItem = {
  id: string
  columnId: string
  text: string
  type: "CARD"
}

export type ColumnDragItem = {
  id: string
  text: string
  type: "COLUMN"
}

export type DragItem = CardDragItem | ColumnDragItem